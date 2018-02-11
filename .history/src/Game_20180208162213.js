import React, { Component } from 'react';
import { QuestionBox } from './QuestionBox.js';
import AnswerBox from './AnswerBox.js';
import Question from './Models/models';
import axios from 'axios';


export default class Game extends Component {
    constructor(props) {
        super(props)
        this.getQuestionsApi = this.getQuestionsApi.bind(this)
        this.handleAnswer = this.handleAnswer.bind(this)
        this.showQuestion = this.showQuestion.bind(this)
        this.state = {
            questions: null
        }
    }

    componentWillMount() {
        this.getQuestionsApi(this.props.category, this.props.difficulty);
    }

    componentDidUpdate(prevProps, prevState) {
    }

    showQuestion() {
        for (let question of this.state.questions[0]) {
            if (question.display) {
                return question
            }
        }
    }

    handleAnswer(status) {
        
    }


    getQuestionsApi(category, difficulty) {

        var url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`

        axios.get(url)
            .then(response => {
                console.log(response)
                let questions = response.data.results.map((item) => {
                    return new Question(item.question, item.incorrect_answers, item.correct_answer, false)
                });
                questions[0].display = true;
                this.setState({ questions: [questions] });
            })
            .catch(error => {
                console.log('Nope it aint workin', error);
            });
    }

    render() {

        let questionBox;
        if (this.state.questions) {
            return (<QuestionBox item={this.showQuestion()} handleAnswer={this.handleAnswer} />)
        } else {
            <div class="sk-circle">
                <div class="sk-circle1 sk-child"></div>
                <div class="sk-circle2 sk-child"></div>
                <div class="sk-circle3 sk-child"></div>
                <div class="sk-circle4 sk-child"></div>
                <div class="sk-circle5 sk-child"></div>
                <div class="sk-circle6 sk-child"></div>
                <div class="sk-circle7 sk-child"></div>
                <div class="sk-circle8 sk-child"></div>
                <div class="sk-circle9 sk-child"></div>
                <div class="sk-circle10 sk-child"></div>
                <div class="sk-circle11 sk-child"></div>
                <div class="sk-circle12 sk-child"></div>
            </div>
        }
        return (
            <div>
                {questionBox}
            </div>
        )
    }
}
