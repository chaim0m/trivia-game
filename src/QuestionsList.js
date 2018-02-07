import React, { Component } from 'react';
import QuestionBox from './QuestionBox.js';
import AnswerBox from './AnswerBox.js';

export default class QuestionList extends Component {
    render(){
    return (
    this.props.questions.map((question, index)=><QuestionBox item={question} key={index} index={index}/>) 
    //this line does not make sense the "question" is the entire array of objects from the API not just one question. 
    //it seems to be necessary to store the questions once retrieved and then loop over them.
    )
}
}