import React, { Component } from 'react';

class FormSetting extends Component {
  
  
handleSelectVal = (e) => {
            this.props.handleSelect({categoryCode:e.target.value})
            
          }
  
handleSelectDiff = (e) => {
            this.props.handleSelect({difficulty:e.target.value})


}

  render() {
    return (
      <div className="setting">
      <div className="Category" >
      Category:
      <select onChange={this.handleSelectVal}>
        <option value="9" >General knowledge</option>
        <option value="12">Music</option>
        <option value="14">Television</option>
        <option value="11">Film</option>
        <option value="21" >Sports</option>
        <option value="24" >Politics</option>
        <option value="23" >History</option>
        <option value="22" >Geography</option>
      </select>
      </div>
      <div>
        Difficulty:
        <select onChange={this.handleSelectDiff}>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      </div>
      </div>
    );
  }
}

export default FormSetting;
