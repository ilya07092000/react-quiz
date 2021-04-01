import React from "react";
import "./Quiz.css";
import ActiveQuiz from "../../Components/ActiveQuiz/ActiveQuiz";

export default class Quiz extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            activeQuestion: 0,
            answerState: null,
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
        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key] === 'success') {
                return;
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];

        if(question.rightAnswerId === answerId) {
            
            this.setState({
                answerState: {[answerId]: 'success'},
            });

            const timeout = window.setTimeout(() => {
                if(this.isQuizFinished()) {
                    console.log('Finished');
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null,
                    });
                }
                
                window.clearTimeout(timeout);
            }, 1000);
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            });
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
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
                    state={this.state.answerState}
				></ActiveQuiz>
			</div>
		);
	}
}
