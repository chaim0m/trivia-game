import React, { Component } from 'react';

export default class AnswerBox extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        // this.shuffle = this.shuffle.bind(this)
        this.state = {
            data: this.props
        }
    }
    
    handleClick(e) {
        console.log(e.target);
        console.log(e.target.innerHTML);
        console.log(this.state.data.answers);
                let pickedAnswer = e.target.innerHTML;
                let allAnswers = this.state.data.answers;
        for (let answer of allAnswers ){
            if (answer.isCorrect){
                if(answer.value==pickedAnswer){
                    alert("Great Job! You got the right answer.")
                }
                else{
                    alert("oh no, answer incorrect")
                }
            }
        }
        // if (e.target.props.item.isCorrect){
        //     e.target.className = "hex-option border green"
        // } else {
        //     e.target.className = "hex-option border red"
        // }
        // this.props.handleClick(e.target.item.isCorrect)
    }

    componentDidMount() {
/*         let shuffled = this.shuffle(this.props.answers)
        this.setState({ answers: shuffled }); */
    }

    // shuffle(array) {
    //     let currentIndex = array.length, temporaryValue, randomIndex;

    //     while (0 !== currentIndex) {

    //         randomIndex = Math.floor(Math.random() * currentIndex);
    //         currentIndex -= 1;

    //         temporaryValue = array[currentIndex];
    //         array[currentIndex] = array[randomIndex];
    //         array[randomIndex] = temporaryValue;
    //     }

    //     return array;
    // }
    render() {
        return (
            <div className="answer-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="hex-option border" value={this.props.answers[0].value} onClick={this.handleClick} dangerouslySetInnerHTML={{ __html: this.props.answers[0].value }} />
                    </div>
                    <div className="col-md-6">    
                        <div className="hex-option border" value={this.props.answers[1].value} onClick={this.handleClick} dangerouslySetInnerHTML={{ __html: this.props.answers[1].value }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="hex-option border" value={this.props.answers[2].value} onClick={this.handleClick} dangerouslySetInnerHTML={{ __html: this.props.answers[2].value }} />
                    </div>
                    <div className="col-md-6">
                        <div className="hex-option border" value={this.props.answers[3].value} onClick={this.handleClick} dangerouslySetInnerHTML={{ __html: this.props.answers[3].value }} />
                    </div>
                </div>
            </div>
        )
    }
}








