import React, { useLayoutEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BottomNavig from "./components/Navbar/BottomNavig";


import{ Component } from 'react';

class App extends Component {

  state = { width: 0, height: 0 };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log(window.innerWidth,window.innerHeight)
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  render() {
    
    return (
      this.state.width > 768 ?
      
      <div>
        <Navbar />
        <div className="App">
          <h1>Welcome !</h1>
        </div>
      </div>
      :
      <div>
        <div className="App">
          <h1>Welcome !</h1>
        </div>
        <BottomNavig />
      </div>
   
    );
  }
}

export default App;

