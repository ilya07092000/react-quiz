import React from 'react';
import './AnswerItem.css';

const AnswerItem = (props) => {
    return (
        <li>
            {props.answer.text}
        </li>
    )
};

export default AnswerItem;