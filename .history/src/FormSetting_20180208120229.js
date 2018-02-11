import React, { Component } from 'react';

class FormSetting extends Component {
  constructor(props) {
    super(props);
    this.state = { category: '', difficulty: '' }
    this.startGame = this.startGame.bind(this);
    this.handleSelectVal = this.handleSelectVal.bind(this);
    this.handleSelectDiff = this.handleSelectDiff.bind(this);
  }

  handleSelectVal = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }

  handleSelectDiff = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }

  startGame() {
    this.props.handleSelect(this.state);

  }
  render() {
    return (
      <form>
        Category:
      <select onChange={this.handleSelectVal}>
          <option>-- Select Category --</option>
          <option value="9" id="category">General knowledge</option>
          <option value="12" id="category">Music</option>
          <option value="14" id="category">Television</option>
          <option value="11" id="category">Film</option>
          <option value="21" id="category">Sports</option>
          <option value="24" id="category">Politics</option>
          <option value="23" id="category">History</option>
          <option value="22" id="category">Geography</option>
        </select>
        Difficulty:
        <select onChange={this.handleSelectDiff}>
          <option value="Easy" id="difficulty">Easy</option>
          <option value="Medium" id="difficulty">Medium</option>
          <option value="Hard" id="difficulty">Hard</option>
        </select>
        <button type="submit" onClick={this.startGame}>Start Game</button>
      </form>
    );
  }
}

export default FormSetting;
