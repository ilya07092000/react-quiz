import React from 'react';
import './ActiveQuiz.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => {
   return (
        <div className="active-quiz">
            <div className="active-quiz__header">
                <p>
                    <span>{props.answerNumber}. </span>
                    {props.question}
                </p>
                <p>{props.answerNumber} из {props.quizLength}</p>
            </div>

            <AnswersList 
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
   )
};

export default ActiveQuiz;