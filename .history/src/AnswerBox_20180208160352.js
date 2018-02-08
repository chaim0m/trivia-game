import React, { Component } from 'react';

export default class AnswerBox extends Component {
    constructor(props) {
        super(props) ;
        this.handleClick = this.handleClick.bind(this)
        this.shuffle = this.shuffle.bind(this)
    }

    handleClick() {

    }
    componentDidMount() {
        let shuffled = this.shuffle(this.state.answers)
        this.setState({ answers: shuffled });
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
    render() {debugger;
            return (
            <div className="answer-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="hex-option border" onClick={this.handleClick} dangerouslySetInnerHTML={{__html: this.props.answers[0].value}} />
                        <div className="hex-option border" onClick={this.handleClick} dangerouslySetInnerHTML={{__html:this.props.answers[1].value}} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="hex-option border" onClick={this.handleClick} dangerouslySetInnerHTML={{__html:this.props.answers[2].value}}/>
                        <div className="hex-option border" onClick={this.handleClick} dangerouslySetInnerHTML={{__html:this.props.answers[3].value}}/>
                    </div>
                </div>
            </div>
            )
    }
}








