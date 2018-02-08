import React, { Component } from 'react';
import './App.css';
import QuestionBox from './QuestionBox.js';
import AnswerBox from './AnswerBox.js';
import Game from './Game.js';
import FormSetting from './FormSetting';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { questions: [], category: "", difficulty: "" }
  }

  handleSelect = (formValue) => {
    this.setState(formValue)
  }

  componentDidUpdate(prevProps, prevState){
      if (prevState !== this.state){
          this.getQuestionsApi(this.state.category, this.state.difficulty);
      }
  }
  getQuestionsApi(category, difficulty) {

    var url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`

    axios.get(url)
      .then(response => {
        console.log(response)
        let questions = response.data.results;
        questions.forEach((item) => {
          item.displayQ = false
        });
        questions[0].displayQ = true;
        this.setState((prevState) => { questions: prevState.questions.push(questions) });
      })
      .catch(error => {
        console.log('Nope it aint workin', error);
      });
  }




  render() {
    return (
      <div className="App">
        <div>
          <FormSetting handleSelect={this.handleSelect} />
          <Game category={this.state.category} difficulty={this.state.difficulty} />
        </div>


      </div>
    );
  }
}

export default App;
