import React from 'react';
import './FinishedQuiz.css';
import Button from "../../Components/UI/Button/Button";

const FinishedQuiz = props => {
    console.log(props.results);
    return (
        <div className="finished-quiz">
            <ul>
                { props.quiz.map((quizItem, index) => {
                    return(
                        <li key={index} className={[props.results[index + 1], 'finished-quiz__item'].join(' ')}>
                            {index + 1}. {quizItem.question}
                        </li>
                    )
                }) }
            </ul>

            <p>Правильно 4 из 10</p>

            <Button onClick={props.onReset}>
                Повторить
            </Button>
        </div>
    )
};

export default FinishedQuiz;