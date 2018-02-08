import React, { Component } from 'react';
import {QuestionBox} from './QuestionBox.js';
import AnswerBox from './AnswerBox.js';
import Question from './Models/models';
import axios from 'axios';


export default class Game extends Component {
    constructor(props){
        super(props)
        this.getQuestionsApi = this.getQuestionsApi.bind(this)
        this.handleAnswer = this.handleAnswer.bind(this)
        this.showQuestion = this.showQuestion.bind(this)
        this.state={
            questions: []
        }
    }

    componentWillMount(){
        this.getQuestionsApi(this.props.category, this.props.difficulty);
    }
    
    componentDidUpdate(prevProps, prevState){
    }

    showQuestion() {
        for (let question of this.state.questions[0]){
            if (question.display){
                return question
            }
        }
    }

    handleAnswer(){

    }


    getQuestionsApi(category, difficulty){

        var url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    
        axios.get(url)
        .then(response => {
            console.log(response)
                let questions = response.data.results.map((item) => {
                    return new Question(item.question, item.incorrect_answers, item.correct_answer, false)
                });
                questions[0].display = true;
                this.setState((prevState) => {questions: prevState.questions.push(questions)});
        })
        .catch(error => {
            console.log('Nope it aint workin', error);
        });
    } 
    
    render(){

        let questionBox = (this.state.questions.length > 0) ? (<QuestionBox question={this.showQuestion()} handleAnswer={this.handleAnswer}/>):(<p>LOADING</p>);
        return (
            <div>
                {questionBox} 
            </div>
        )
    }
}
