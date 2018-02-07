import React, { Component } from 'react';

export default class AnswerBox extends Component {
    constructor(props){
        super(props)
        this.renderAns=this.renderAns.bind(this)
    }
    renderAns(){
        this.props.incorrect_answers.map((ans, index)=><div className="answers" key={index}>{ans}</div>);
        <div className="answers">{this.props.correct_answer}</div>
    }
    render(){
        return (
            <div>
            <span className="answerbox">
            {this.renderAns()}
            </span>
            </div>
        )
    }
}




