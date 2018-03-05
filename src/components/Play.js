import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Square from './Square';
import '../style/App.css';

class Play extends Component {
  constructor() {
    super();
    this.changePlayer = this.changePlayer.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }
  state = {
    squares: Array(9).fill('N'),
    currentPlayer: 'X',
    numberOfPlays: 0,
    status: 'NoWinner'
  }
  resetBoard() {
    this.setState ({
      squares: Array(9).fill('N'),
      currentPlayer: 'X',
      numberOfPlays: 0,
      status: 'NoWinner'
    })
  }
  changePlayer() {
    if (this.state.currentPlayer === 'X') {
      this.setState({currentPlayer: 'O'});
      document.getElementById("o-player").style.display="block";
      document.getElementById("x-player").style.display="none";
    } else {
      this.setState({currentPlayer: 'X'});
      document.getElementById("x-player").style.display="block";
      document.getElementById("o-player").style.display="none";
    }
    this.setState({ numberOfPlays: (this.state.numberOfPlays + 1) })
    return
  }
  checkWinner(squares) {
    const rows = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < rows.length; i++) {
          const [a, b, c] = rows[i];
            if ((squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) && (squares[a] !== 'N')) {
              this.setState({ status: 'Winner' });
              return true;
            }
        }
        return null;
    };

  render() {
    return (
      <div className="col-md-12">
        <div className="players col-md-3 col-sm-3 desktop">
          <img alt="Player" src={ require(`../images/X.gif`) } />
          <div id="x-player">
            <h2>Current Player:</h2>
            <h3>{this.state.currentPlayer}</h3>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="game-board">
            <Square quadrant={0} currentPlayer={this.state.currentPlayer} changePlayer={this.changePlayer} checkWinner={this.checkWinner} squares={this.state.squares} numberOfPlays={this.state.numberOfPlays} />
            <Square quadrant={1} currentPlayer={this.state.currentPlayer} changePlayer={this.changePlayer} checkWinner={this.checkWinner} squares={this.state.squares} numberOfPlays={this.state.numberOfPlays} />
            <Square quadrant={2} currentPlayer={this.state.currentPlayer} changePlayer={this.changePlayer} checkWinner={this.checkWinner} squares={this.state.squares} numberOfPlays={this.state.numberOfPlays} />
            <Square quadrant={3} currentPlayer={this.state.currentPlayer} changePlayer={this.changePlayer} checkWinner={this.checkWinner} squares={this.state.squares} numberOfPlays={this.state.numberOfPlays} />
            <Square quadrant={4} currentPlayer={this.state.currentPlayer} changePlayer={this.changePlayer} checkWinner={this.checkWinner} squares={this.state.squares} numberOfPlays={this.state.numberOfPlays} />
            <Square quadrant={5} currentPlayer={this.state.currentPlayer} changePlayer={this.changePlayer} checkWinner={this.checkWinner} squares={this.state.squares} numberOfPlays={this.state.numberOfPlays} />
            <Square quadrant={6} currentPlayer={this.state.currentPlayer} changePlayer={this.changePlayer} checkWinner={this.checkWinner} squares={this.state.squares} numberOfPlays={this.state.numberOfPlays} />
            <Square quadrant={7} currentPlayer={this.state.currentPlayer} changePlayer={this.changePlayer} checkWinner={this.checkWinner} squares={this.state.squares} numberOfPlays={this.state.numberOfPlays} />
            <Square quadrant={8} currentPlayer={this.state.currentPlayer} changePlayer={this.changePlayer} checkWinner={this.checkWinner} squares={this.state.squares} numberOfPlays={this.state.numberOfPlays} />
          </div>
        </div>
        <div className="players col-md-3 col-sm-3 desktop">
          <img alt="Player" src={ require(`../images/O.gif`) } />
          <div id="o-player">
            <h2>Current Player:</h2>
            <h3>{this.state.currentPlayer}</h3>
          </div>
        </div>
        <div className="restart-game col-md-12">
          <div className="mobile clear">
              <h2>Current Player:</h2>
              <h3>{this.state.currentPlayer}</h3>
          </div>
          <div className="restart-game mobile clear col-md-12">
            <Link to="/">Restart Game</Link>
          </div>
        </div>
      </div>
    )
  }

}
export default Play;
