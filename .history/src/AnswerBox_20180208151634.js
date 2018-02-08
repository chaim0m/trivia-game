import React, { Component } from 'react';

export default class AnswerBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            answers: props.answers
        }
        this.handleClick = this.handleClick.bind(this)
        this.shuffle = this.shuffle.bind(this)
    }

    handleClick() {

    }
    componentDidMount() {
        // let shuffled = this.shuffle(this.state.answers)
        // this.setState({ answers: shuffled });
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
        let answers;
        if (this.state.answers) {
            answers = (
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
        } else {
            answers = (
                <div class="sk-circle">
                    <div class="sk-circle1 sk-child"></div>
                    <div class="sk-circle2 sk-child"></div>
                    <div class="sk-circle3 sk-child"></div>
                    <div class="sk-circle4 sk-child"></div>
                    <div class="sk-circle5 sk-child"></div>
                    <div class="sk-circle6 sk-child"></div>
                    <div class="sk-circle7 sk-child"></div>
                    <div class="sk-circle8 sk-child"></div>
                    <div class="sk-circle9 sk-child"></div>
                    <div class="sk-circle10 sk-child"></div>
                    <div class="sk-circle11 sk-child"></div>
                    <div class="sk-circle12 sk-child"></div>
                </div>
            )
        }
        return {answers}
    }
}








