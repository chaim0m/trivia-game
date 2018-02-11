import React, { Component } from 'react';
import AnswerBox from './AnswerBox.js';

export const QuestionBox = (props) => {
    return (
        <div className="row">
            <div className="hex-question border">
                {{__html: props.item.question}}
            </div>
            <div className="answer-container">
                <AnswerBox handleClick={props.handleAnswer} />
            </div>
        </div>
    )
}

{/* correct={props.question.correct_answer} incorrect={props.question.incorrect_answers} */}