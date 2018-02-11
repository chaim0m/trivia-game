import React, { Component } from 'react';

export default class AnswerBox extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
           answers: props.answers
        }
    }

    handleClick(){
    }
    renderAns(){
       
    }
    render(){
        let n = Math.floor(Math.random() * 3)
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








