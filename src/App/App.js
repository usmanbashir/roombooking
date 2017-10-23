import React, { Component } from 'react';
import logo from '../images/1aim-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Room Booking</h1>
        </header>
        <p className="App-intro">
          Book a meeting room without hassle.
        </p>
      </div>
    );
  }
}

export default App;
