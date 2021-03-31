import React from "react";
import "./Quiz.css";
import ActiveQuiz from "../../Components/ActiveQuiz/ActiveQuiz";

export default class Quiz extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            activeQuestion: 0,
			quiz: [
				{
					question: "Как дела?",
					rightAnswerId: 2,
                    id: 1,
					answers: [
						{
							text: "Question 1",
							id: 1,
						},
						{
							text: "Question 2",
							id: 2,
						},
						{
							text: "Question 3",
							id: 3,
						},
						{
							text: "Question 4",
							id: 4,
						},
					],
				},

                {
					question: "Что такое JS?",
					rightAnswerId: 2,
                    id: 2,
					answers: [
						{
							text: "Question 1",
							id: 1,
						},
						{
							text: "Question 2",
							id: 2,
						},
						{
							text: "Question 3",
							id: 3,
						},
						{
							text: "Question 4",
							id: 4,
						},
					],
				},
			],
		};
	}

    answerClickHandler(answerId) {
        this.setState({
            activeQuestion: this.state.activeQuestion + 1,
        });
    }

	render() {
		return (
			<div className="quiz">
				<p className="title">Ответьте на вопросы</p>
				<ActiveQuiz
					answers={this.state.quiz[this.state.activeQuestion].answers}
					question={this.state.quiz[this.state.activeQuestion].question}
                    onAnswerClick={this.answerClickHandler.bind(this)}
                    quizLength={this.state.quiz.length}
                    answerNumber={this.state.activeQuestion + 1}
				></ActiveQuiz>
			</div>
		);
	}
}
