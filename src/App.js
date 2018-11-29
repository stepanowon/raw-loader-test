import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import txtA from './a.txt';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { msg :txtA }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{this.state.msg}</h1>
      </div>
    );
  }
}

export default App;
