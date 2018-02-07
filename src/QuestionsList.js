import React, { Component } from 'react';
import QuestionBox from './QuestionBox.js';
import AnswerBox from './AnswerBox.js';

export default class QuestionList extends Component {
    render(){
    return (
    this.props.questions.map((question, index)=><QuestionBox item={question} key={index} index={index}/>)
    )
}
}
