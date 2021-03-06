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

/*   componentDidUpdate(prevProps, prevState){
    if (prevState !== this.state){
        this.getQuestionsApi(this.state.category, this.state.difficulty);
    }
} */


  

  render() {

    let game = this.state.category ? (<Game {...this.state} />) : null;

    return (
      <div className="App">
      <input type="text" id="user" value={this.state.name}/>
      <div>
      <FormSetting handleSelect={this.handleSelect}/>
      {game}
      </div>


      </div>
    );
  }
}

export default App;