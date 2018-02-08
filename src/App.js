import React, { Component } from 'react';
import './App.css';
import QuestionBox from './QuestionBox.js';
import AnswerBox from './AnswerBox.js';
import Game from './Game.js';
import FormSetting from './FormSetting';

class App extends Component {
  constructor(props){
    super(props)
    this.state={category:"", difficulty:""}
  }
  handleSelect = (formValue) => {
    this.setState(formValue)
  }

  

  render() {
    return (
      <div className="App">
      <div>
      <FormSetting handleSelect={this.handleSelect}/>
      <Game category={this.state.category} difficulty={this.state.difficulty}/>
      </div>


      </div>
    );
  }
}

export default App;