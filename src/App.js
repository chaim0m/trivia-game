import React, { Component } from 'react';
import './App.css';
import QuestionBox from './QuestionBox.js';
import AnswerBox from './AnswerBox.js';
import Game from './Game.js';
import FormSetting from './FormSetting';

class App extends Component {
  constructor(props){
    super(props)
    this.state={categoryCode:"", difficulty:""}
  }
  handleSelect = (formValue) => {
    this.setState(formValue)
  }

  

  render() {
    return (
      <div className="App">
      <div>
        <h1>Player A</h1>
      <FormSetting handleSelect={this.handleSelect}/>
      </div>


      </div>
    );
  }
}

export default App;
