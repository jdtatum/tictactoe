import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StartMenu from './components/StartMenu';
import Play from './components/Play';
import Winner from './components/Winner';
import Tie from './components/Tie';
import NotFound from './components/NotFound';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StartMenu} />
      <Route path="/play" component={Play} />
      <Route path="/tie" component={Tie} />
      <Route path="/winner" component={Winner} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
    );
  }
}

export default App;
