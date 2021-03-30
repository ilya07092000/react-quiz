import React from 'react';
import './ActiveQuiz.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => {
   return (
        <div className="active-quiz">
            <p>{props.question}</p>

            <AnswersList 
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
   )
};

export default ActiveQuiz;