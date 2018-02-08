import React, { Component } from 'react';
import './App.css';
import QuestionBox from './QuestionBox.js';
import AnswerBox from './AnswerBox.js';
import Game from './Game.js';
import FormSetting from './FormSetting';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      category:"", difficulty:"", 
      user={
        name:"",
        score:""
      }
    }
    
  }
  handleSelect = (formValue) => {
    this.setState(formValue)
  }
  postUser(user){

    var url = './postuser'

    axios.post(url,data)
    .then(response => {
      console.log(response.data);
    })  
    .catch(error => {
        console.log('Nope it aint workin', error);
    });
}
getUsers(){
  var url='./getusers'
  axios.get(url)
  .then(response=>
 // take response.data and sort out a high score or maybe a few high scores.
  )
}
  

  render() {
    return (
      <div className="App">
      <input type="text" id="user" value={this.state.name}/>
      <div>
      <FormSetting handleSelect={this.handleSelect}/>
      <Game category={this.state.category} difficulty={this.state.difficulty}/>
      </div>


      </div>
    );
  }
}

export default App;
