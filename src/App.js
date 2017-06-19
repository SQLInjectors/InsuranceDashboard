import React, { Component } from 'react';
import Stats from './components/statShow';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hackathon Stuff</h2>
          <Stats/>
        </div>
      </div>
    );
  }
}

export default App;
