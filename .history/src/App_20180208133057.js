import React, { Component } from 'react';
import './App.css';
import QuestionBox from './QuestionBox.js';
import AnswerBox from './AnswerBox.js';
import Game from './Game.js';
import FormSetting from './FormSetting';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {category:null, difficulty:null}
  }

  handleSelect = (formValue) => {
    this.setState(formValue)
  }

  render() {

    let game = this.state.category ? (<Game {...this.state} />) : null;

    return (
      <div>
        <FormSetting handleSelect={this.handleSelect}/>
        {game}
      </div>
    );
  }
}

export default App;