import React from 'react';
import './ActiveQuiz.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => {
   return (
        <div className="active-quiz">
            <p>ActiveQuiz</p>

            <AnswersList answers={props.answers}/>
        </div>
   )
};

export default ActiveQuiz;