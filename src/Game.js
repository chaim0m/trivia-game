import React, { Component } from 'react';

export default class Game extends Component {
    constructor(props){
        super(props)
        this.renderQuestion = this.renderQuestion.bind(this)
        this.state={
            questions:[]
        }
    }
    renderQuestion() {
        return this.props.questions[i].question
    }
    render(){
        return (
            <div>
                {this.renderQuestion()}
            </div>
        )
    }
}

componentDidMount() {
    this.interval = setInterval(() => this.renderQuestion(), time);
  }