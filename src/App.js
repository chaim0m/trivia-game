import React, { Component } from 'react';
import './App.css';
import 'bootstrap3/dist/css/bootstrap.css';
import QuestionBox from './QuestionBox.js';
import AnswerBox from './AnswerBox.js';
import Game from './Game.js';
import FormSetting from './FormSetting';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {category:null, difficulty:null}
  }

  handleSelect = (cat, diff) => {
    this.setState({category: cat, difficulty: diff})
  }

  render() {
    let spinningWheel = (
      <div className="sk-circle">
      <div className="sk-circle1 sk-child"></div>
      <div className="sk-circle2 sk-child"></div>
      <div className="sk-circle3 sk-child"></div>
      <div className="sk-circle4 sk-child"></div>
      <div className="sk-circle5 sk-child"></div>
      <div className="sk-circle6 sk-child"></div>
      <div className="sk-circle7 sk-child"></div>
      <div className="sk-circle8 sk-child"></div>
      <div className="sk-circle9 sk-child"></div>
      <div className="sk-circle10 sk-child"></div>
      <div className="sk-circle11 sk-child"></div>
      <div className="sk-circle12 sk-child"></div>
  </div>
    )
    let game;
    if(this.state.category){

    game = (<Game category={this.state.category} difficulty={this.state.difficulty}/>)}
     else{
      game = spinningWheel;
     }
     return (
       <div>
         <FormSetting handleSelect={this.handleSelect}/>
         {game}
       </div>
 
     );
   }
}

export default App;