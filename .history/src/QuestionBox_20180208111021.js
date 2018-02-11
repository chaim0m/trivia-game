import React, { Component } from 'react';
import AnswerBox from './AnswerBox.js';

export default class QuestionBox extends Component {
    render() {
        return (
            <div className="row">
                <div className="hex-question border">
                    {this.props.question}
                </div>
                <div className="answer-container">
                    <AnswerBox correct={props.question.correct_answer} incorrect={props.question.incorrect_answers} handleClick={props.handleAnswer} />
                </div>
            </div>
        )
    }
}