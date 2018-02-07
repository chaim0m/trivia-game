import React, { Component } from 'react';

export default class AnswerBox extends Component {
    constructor(props){
        super(props)
        this.concatAns=this.concatAns.bind(this)
        this.state={
            answers: {correct: this.props.correct, incorrect: this.props.incorrect, ans:[]}
        }
    }
     conncatAns(){
         let tempArr = this.state.incorrect;
         let temp = this.state.correct;
         tempArr.push(...temp);
        this.setState({ans: tempArr})
        return this.state.ans;
     }  
    
    render(){
        this.concatAns()
        return (
            this.state.ans.map((answer, index)=><div item={answer} key={index} index={index}></div>)
        )
    }
}








