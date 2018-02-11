import React, { Component } from 'react';

export default class AnswerBox extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            answers: props.answers
        }
    }

    handleClick() {
    
    }

    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    render() {

        shuffle(this.state.answers);

        return (
            <div className="answer-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="hex-option border" onClick={this.handleClick}>{this.state.answers[0]}</div>
                        <div className="hex-option border" onClick={this.handleClick}>{this.state.answers[1]}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="hex-option border" onClick={this.handleClick}>{this.state.answers[2]}</div>
                        <div className="hex-option border" onClick={this.handleClick}>{this.state.answers[3]}</div>
                    </div>
                </div>
            </div>
        )
    }
}








