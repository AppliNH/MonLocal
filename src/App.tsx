import React, { useLayoutEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BottomNavig from "./components/Navbar/BottomNavig";


import { Component } from 'react';
import Main from './screens/Main';
import Root from './Root';

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
      this.state.width > 768 ?

        <div>
          <Navbar />
          <Root />
        </div>
        :
        <div>
          <Root />
          <BottomNavig />
        </div>

    );
  }
}

export default App;

