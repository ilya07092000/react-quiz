import React from 'react';
import './AnswerItem.css';

const AnswerItem = (props) => {
    return (
        <li onClick={props.onAnswerClick.bind(this, props.answer.id)}>
            {props.answer.text}
        </li>
    )
};

export default AnswerItem;