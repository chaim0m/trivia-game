import React, { Component } from 'react';
import AnswerBox from './AnswerBox.js';

export const QuestionBox = (props) => {
    return (
        <div className="row">
            <div className="hex-question border" 
            dangerouslySetInnerHTML={{__html: props.item.question}}>
            </div>
            <div className="answer-container">
                <AnswerBox handleClick={props.handleAnswer} answers={props.item.answers}/>
            </div>
        </div>
    )
}

{/* correct={props.question.correct_answer} incorrect={props.question.incorrect_answers} */}