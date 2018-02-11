import React, { Component } from 'react';

export default class AnswerBox extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            correct: props.correct,
            incorrect: props.incorrect
        }
    }
    handleClick(){
    }
    renderAns(){
       
    }
    render(){
        return (
            <div className="answer-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="hex-option border" onClick={this.handleClick}>{this.state.correct}</div>
                        <div className="hex-option border" onClick={this.handleClick}>{this.state.correct}</div>
                    </div>
                </div>
                <div className="row">    
                    <div className="col-md-6">
                        <div className="hex-option border" onClick={this.handleClick}>{this.state.correct}</div>
                        <div className="hex-option border" onClick={this.handleClick}>{this.state.correct}</div>
                    </div>
                </div>
            </div>
        )
    }
}








