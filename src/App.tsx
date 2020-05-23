import React, { useLayoutEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BottomNavig from "./components/Navbar/BottomNavig";


import { Component } from 'react';
import Main from './screens/Main';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Articles from './screens/Articles';
import NotFound from './screens/NotFound';
import Recipes from './screens/Recipes';

class App extends Component {

  state = { width: 0, height: 0 };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log(window.innerWidth, window.innerHeight)
  };

  componentDidMount() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', this.updateDimensions);
  }

  render() {

    return (
      <BrowserRouter>
      {this.state.width > 768 ? <Navbar /> : null}
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/articles" component={Articles}></Route>
          <Route exact path="/recipes" component={Recipes}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        {this.state.width <= 768 ? <BottomNavig  currentRoute={window.location.pathname} /> : null}
      </BrowserRouter>
    );
  }
}

export default App;

