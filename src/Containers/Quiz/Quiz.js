import React from "react";
import "./Quiz.css";
import ActiveQuiz from "../../Components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../Components/FinishedQuiz/FinishedQuiz";

export default class Quiz extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            results: {},
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
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
        const results = this.state.results 

        if(question.rightAnswerId === answerId) {
            if(!results[question.id]) {
                results[question.id] = 'success';
            }

            this.setState({
                results,
                answerState: {[answerId]: 'success'},
            });

            const timeout = window.setTimeout(() => {
                if(this.isQuizFinished()) {
                    this.setState({
                        isFinished: true,
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null,
                    });
                }
                
                window.clearTimeout(timeout);
            }, 1000);
        } else {
            results[question.id] = 'error';
            this.setState({
                results,
                answerState: {[answerId]: 'error'},
            });
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    resetHandler() {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false, 
            results: {},
        })
    }

	render() {
		return (
			<div className="quiz">
				<p className="title">Ответьте на вопросы</p>

                {
                    this.state.isFinished
                    ?   <FinishedQuiz 
                            results={this.state.results}
                            quiz={this.state.quiz}
                            onReset={this.resetHandler.bind(this)}
                        />
                    :   <ActiveQuiz
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.answerClickHandler.bind(this)}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                        ></ActiveQuiz>
                }
			</div>
		);
	}
}
