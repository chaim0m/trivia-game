import React, { Component } from 'react';

export default class AnswerBox extends Component {
    constructor(props){
        super(props)
        this.renderAns=this.renderAns.bind(this)
        this.state={
            answers: {correct: {this.props.correct}, incorrect: {this.props.incorrect}}
        }
    }
    renderAns(){
       
    }
    render(){
        return (
            <div>
            <span className="answerbox">
            {this.props.correct}
            </span>
            </div>
        )
    }
}





