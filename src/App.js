import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './components/Search';

class App extends Component {

  state = {
    albumInput: '',
  }

  // componentDidMount() {
  //   console.log("say hello");
  //   fetch('http://localhost:3300/api/search/scorpion')
  //   .then(response => response.json())
  //     .then(data => console.log(data));
  // }

  updateAlbumInput = (event) => {
    this.setState({
      albumInput: event.target.value
    });
  }

  // Esta función es para habilitar 'Enter' en el input
  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSearchAlbum();
    }
  }

  // Esta función es quien buscará el album
  handleSearchAlbum = () => {
    let album = this.state.albumInput;
    album = album.trim();
    console.log(`this is the album to search: ${album}`);
    fetch(`http://localhost:3300/api/search/${album}`)
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
        <Search
          albumInput={this.state.albumInput}
          updateAlbumInput={this.updateAlbumInput}
          pressEnter={this._handleKeyPress}
          handleSearchAlbum={this.handleSearchAlbum}
        />
      </div>
    );
  }
}

export default App;
