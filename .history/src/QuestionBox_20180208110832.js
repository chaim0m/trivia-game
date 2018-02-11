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
                    <AnswerBox correct={this.props.question.correct_answer} incorrect={this.props.question.incorrect_answers} handleClick={this.props.handleAnswer} />
                </div>
            </div>
        )
    }
}