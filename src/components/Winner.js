import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/App.css';

class Winner extends Component {
    render() {
      return (
        <div className="winning-message">
          <img alt="Player" src={ require(`../images/${this.props.location.state.currentPlayer}.gif`) } />
          <h1>{this.props.location.state.currentPlayer} has won the game!</h1>
          <Link to="/">Start a New Game</Link>
        </div>
      );
  }
}

export default Winner;
