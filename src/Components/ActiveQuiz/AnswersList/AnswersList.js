import React from "react";
import "./AnswersList.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = (props) => {
	return (
		<ul>
			{props.answers.map((answer, index) => {
				return (
                    <AnswerItem answer={answer} key={index} onAnswerClick={props.onAnswerClick}/>
                );
			})}
		</ul>
	);
};

export default AnswersList;
