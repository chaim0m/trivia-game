import React, { Component } from 'react';
import AnswerBox from './AnswerBox.js';

export default class QuestionBox extends Component {
    render(){
        return (
            <div>
            <span>
                {this.props.item.question}
            </span>
            <AnswerBox correct={this.props.item.correct_answer} incorrect={this.props.item.incorrect_answers}/>
            </div>
        )
    }
}