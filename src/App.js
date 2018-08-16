import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './components/search/Search';
import Albums from './components/albums/Albums';

class App extends Component {

  state = {
    albumInput: '',
    albums: null,
  }

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
      .then(data => data.albums.items)
        .then(albums => { 
          console.log(albums);
          this.setState({ albums });
        });
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
        {
          this.state.albums
          ? <Albums
            albums={this.state.albums}
          />
          : null
        }
      </div>
    );
  }
}

export default App;
