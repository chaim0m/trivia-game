import React, { Component } from 'react';

class FormSetting extends Component {
  constructor(props) {
    super(props);
    this.state = { category: '', difficulty: '', show: true }
    this.startGame = this.startGame.bind(this);
    this.handleSelectVal = this.handleSelectVal.bind(this);
    this.handleSelectDiff = this.handleSelectDiff.bind(this);
  }

  handleSelectVal = (e) => {
    this.setState({ category: e.target.value })
  }

  handleSelectDiff = (event) => {
    this.setState({ difficulty: event.target.value })
  }

  startGame() {
    this.props.handleSelect(this.state.category, this.state.difficulty);
    this.setState({category: '', difficulty: '', show: false})
  }

  render() {
    if (this.state.show){
      return (
        <form>
          Category:
        <select onChange={this.handleSelectVal}>
            <option>-- Select Category --</option>
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
            <option>-- Select Difficulty --</option>
            <option value="easy" name="difficulty">Easy</option>
            <option value="medium" name="difficulty">Medium</option>
            <option value="hard" name="difficulty">Hard</option>
          </select>
          <button type="button" onClick={this.startGame}>Start Game</button>
        </form>
      );
  }
}
}

export default FormSetting;