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
    
    render(){
        return (
            <div>
                {this.renderQnA()}
            </div>
        )
    }
}



const CATEGORY_CODES = {
    'General Knowledge': 9,
    'Music': 12,
    'Television': 14,
    'Film': 11,
    'Politics': 24,
    'History': 23,
    'Sports': 21,
    'Geography': 22
}

const DIFFICULTY_CODE = ['easy', 'medium', 'hard'];

