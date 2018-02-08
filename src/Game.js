import React, { Component } from 'react';
import QuestionBox from './QuestionBox.js';
import AnswerBox from './AnswerBox.js';
import axios from 'axios';


export default class Game extends Component {
    constructor(props){
        super(props)
        this.renderQnA = this.renderQnA.bind(this)
        this.getQuestionsApi=this.getQuestionsApi.bind(this)
        this.state={
            questions:[]
        }
    }
    componentDidMount(){
        this.getQuestionsApi(this.props.category, this.props.difficulty);
        
    }
    getQuestionsApi(category, difficulty){

        var url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    
        axios.get(url)
        .then(response => {
            let questions = response;
            questions.forEach((item) => item.displayQ = false);
            questions[0].displayQ = true;
            this.setState({questions: questions});
        })

        
        .catch(error => {
            console.log('Nope it aint workin', error);
        });
    }
    
    renderQnA() {
        return(
            <div> 
            <QuestionBox question={this.state.questions}/> 
            </div>
        )
    }
    render(){
        // this.getQuestionsApi(this.props.category, this.props.difficulty)
        return (
            <div>
                {this.renderQnA()}
            </div>
        )
    }
}
