import React from 'react';
import './AnswerItem.css';

const AnswerItem = (props) => {
    let classes = [];
    
    if(props.state !== null) {
        classes.push(props.state);
    };

    return (
        <li 
            className={['active-quiz__item', props.state].join(' ')}
            onClick={props.onAnswerClick.bind(this, props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
};

export default AnswerItem;