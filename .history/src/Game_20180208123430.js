import React, { Component } from 'react';
import {QuestionBox} from './QuestionBox.js';
import AnswerBox from './AnswerBox.js';
import axios from 'axios';


export default class Game extends Component {
    constructor(props){
        super(props)
        this.getQuestionsApi = this.getQuestionsApi.bind(this)
        this.handleAnswer = this.handleAnswer.bind(this)
        this.showQuestion = this.showQuestion.bind(this)
        this.state={
            questions:[],
        }
    }

    componentDidMount(){
    }
    
    componentDidUpdate(prevProps, prevState){
        this.getQuestionsApi(prevProps.category, prevProps.difficulty);
    }

    showQuestion() {

    }

    handleAnswer(){

    }


    getQuestionsApi(category, difficulty){

        var url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    
        axios.get(url)
        .then(response => {
            console.log(response)
            let questions = response.data.results;
            questions.forEach((item) => {
                item.displayQ = false
            });
            questions[0].displayQ = true;
            this.setState((prevState) => {questions: prevState.questions.push(questions)});
        })
        .catch(error => {
            console.log('Nope it aint workin', error);
        });
    }
    
    render(){
        let selectedQ = this.showQuestion(this.state.questions)
        return (
            <div>
                <QuestionBox question={selectedQ} handleAnswer={this.handleAnswer}/> 
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

