import React, { Component } from 'react';

export default class QuestionBox extends Component {
    render(){
        return (
            <div>
            <span className="questionbox">
                {this.props.question}  <img src="https://image.flaticon.com/icons/png/512/36/36601.png"/>
            </span>
            </div>
        )
    }
}