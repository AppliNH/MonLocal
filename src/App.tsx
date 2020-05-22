import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BottomNavig from "./components/Navbar/BottomNavig";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        hi
      </div>
      <BottomNavig />
    </div>
  );
}

export default App;
