import React, { Component } from 'react';
import '../style/App.css';

class Header extends Component {
    render() {
      return (
        <div className="header">
          <img src={ require('../images/title-ttt.png') } />
        </div>
      );
  }
}

export default Header;
