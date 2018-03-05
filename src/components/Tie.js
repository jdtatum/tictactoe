import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/App.css';

class Tie extends Component {
    render() {
      return (
        <div className="winning-message">
          <h1>Tie game!</h1>
          <Link to="/">Start a New Game</Link>
        </div>
      );
  }
}

export default Tie;
