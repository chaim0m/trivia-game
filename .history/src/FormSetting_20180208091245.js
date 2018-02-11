import React, { Component } from 'react';

class FormSetting extends Component {
constructor(props){
  super(props);
  this.state = {category: '', difficulty: ''}
  this.startGame = this.startGame.bind(this);
}
  
handleSelectVal = (e) => {
            this.setState({[e.target.name]:e.target.value})
          }
  
handleSelectDiff = (e) => {
            this.setState({[e.target.name]:e.target.value})
}

startGame() {
  this.props.handleSelect(this.state);
  
}
  render() {
    return (
      <form>
      Category:
      <select onChange={this.handleSelectVal}>
        <option value="9" name="category">General knowledge</option>
        <option value="12" name="category">Music</option>
        <option value="14" name="category">Television</option>
        <option value="11" name="category">Film</option>
        <option value="21" name="category">Sports</option>
        <option value="24" name="category">Politics</option>
        <option value="23" name="category">History</option>
        <option value="22" name="category">Geography</option>
      </select>
        Difficulty:
        <select onChange={this.handleSelectDiff}>
        <option value="Easy" name="difficulty">Easy</option>
        <option value="Medium" name="difficulty">Medium</option>
        <option value="Hard" name="difficulty">Hard</option>
      </select>
      <button type="submit" onClick={this.startGame}>Start Game</button>
      </form>
    );
  }
}

export default FormSetting;
