import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './components/Search';

class App extends Component {

  componentDidMount() {
    console.log("say hello");
    fetch('http://localhost:3300/api/search/scorpion')
    .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Search />

      </div>
    );
  }
}

export default App;
