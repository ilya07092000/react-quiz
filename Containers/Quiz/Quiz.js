import React from "react";
import "./Quiz.css";
import ActiveQuiz from "../../Components/ActiveQuiz/ActiveQuiz";

export default class Quiz extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quiz: [
				{
					question: "Как дела?",
					rightAnswerId: 2,
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
        console.log(answerId);
    }

	render() {
		return (
			<div>
				<p>Quiz</p>
				<ActiveQuiz
					answers={this.state.quiz[0].answers}
					question={this.state.quiz[0].question}
                    onAnswerClick={this.answerClickHandler}
				></ActiveQuiz>
			</div>
		);
	}
}
