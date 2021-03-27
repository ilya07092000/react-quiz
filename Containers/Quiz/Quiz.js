import React from 'react';
import './Quiz.css';
import ActiveQuiz from '../../Components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quiz: [
                {
                    answers: [
                        {
                            text: 'Question 1'
                        },
                        {
                            text: 'Question 2'
                        },
                        {
                            text: 'Question 3'
                        },
                        {
                            text: 'Question 4'
                        },
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <p>Quiz</p>
                <ActiveQuiz answers={this.state.quiz[0].answers}>

                </ActiveQuiz>
            </div>
        )
    }
} 