import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../style/App.css';

class StartMenu extends Component {
  render() {
    return(
      <div className="start-menu">
        <div className="menu-title col-md-12">
          <Link to="/play"><img alt="Tic Tac Toe" src={ require('../images/title-ttt.png') } /></Link><br />
        </div>
        <div className="player1 col-md-5 col-sm-5 desktop">
          <img alt="Player 1" src={ require('../images/X.gif') } />
        </div>
        <div className="start-link col-md-2 col-sm-2">
          <Link to="/play">start game</Link>
        </div>
        <div className="player2 col-md-5 col-sm-2 desktop">
          <img alt="Player 2" src={ require('../images/O.gif') } />
        </div>
        <div className="player1 col-xs-6 col-sm-6 mobile">
          <img alt="Player 1" src={ require('../images/X.gif') } />
        </div>
        <div className="player2 col-xs-6 col-sm-6 mobile">
          <img alt="Player 2" src={ require('../images/O.gif') } />
        </div>
      </div>
    )
  }
}

export default StartMenu;
