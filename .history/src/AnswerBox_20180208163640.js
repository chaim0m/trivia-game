import React, { Component } from 'react';

export default class AnswerBox extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.shuffle = this.shuffle.bind(this)
    }

    handleClick(e) {
        console.log(e.target.item.toString());
        if (e.target.item.isCorrect){
            e.target.className = "hex-option border green"
        } else {
            e.target.className = "hex-option border red"
        }
        this.props.handleClick(e.target.item.isCorrect)
    }

    componentDidMount() {
/*         let shuffled = this.shuffle(this.props.answers)
        this.setState({ answers: shuffled }); */
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
        return (
            <div className="answer-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="hex-option border" item={this.props.answers[0]} onClick={this.handleClick} dangerouslySetInnerHTML={{ __html: this.props.answers[0].value }} />
                        <div className="hex-option border" item={this.props.answers[1]} onClick={this.handleClick} dangerouslySetInnerHTML={{ __html: this.props.answers[1].value }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="hex-option border" item={this.props.answers[2]} onClick={this.handleClick} dangerouslySetInnerHTML={{ __html: this.props.answers[2].value }} />
                        <div className="hex-option border" item={this.props.answers[3]} onClick={this.handleClick} dangerouslySetInnerHTML={{ __html: this.props.answers[3].value }} />
                    </div>
                </div>
            </div>
        )
    }
}








