import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../style/App.css';

class Square extends Component {
  state = {
    squareValue: ''
  }

  changeSquare() {
    if (this.props.numberOfPlays === 8 ) {
      this.props.history.push({
        pathname: '/tie'
      })
    } else if ((this.state.squareValue === '') && (this.props.numberOfPlays < 9)) {
      let currentBoard = this.props.squares;
      currentBoard[this.props.quadrant] = this.props.currentPlayer;
      this.setState({
        squareValue: this.props.currentPlayer,
        currentPlayer: this.props.currentPlayer,
        squares: currentBoard[this.props.quadrant]
        });

      if (this.props.checkWinner(this.props.squares)) {
          this.props.history.push({
            pathname: '/winner',
            state: { currentPlayer: this.props.currentPlayer }
          })
        } else {
            this.props.changePlayer();
        }
    }
  }


    render() {
      return (
        <button className="square" onClick={(e) => this.changeSquare(e)}>
          {this.state.squareValue}
        </button>
      );
  }
}

export default withRouter(Square);
