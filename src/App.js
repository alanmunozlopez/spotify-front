import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Search from './components/search/Search';
import Albums from './components/albums/Albums';
import Loader from './components/loader/Loader';

class App extends Component {

  state = {
    isLoaderActive: false,
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
    if (album === '')
      return;
    this.setState({ isLoaderActive: true })
    album = album.trim();
    console.log(`this is the album to search: ${album}`);
    
    fetch(`http://localhost:3300/api/search/${album}`)
    .then(response => response.json())
      .then(data => data.albums.items)
        .then(albums => { 
          console.log(albums);
          this.setState({ albums });
          this.setState({ isLoaderActive: false })
        })
        .catch(error => {
          console.log(`Error ${error}`)
          this.setState({ isLoaderActive: false })
        });
  }

  handleAlbumClick = (url) => {
    console.log(url);
    let win = window.open(url, '_blank');
    win.focus();
  }

  render() {
    return (
      <div className="App">
        <Header />
        {
          this.state.isLoaderActive
          ? <Loader />
          : null
        }
        <div className="App-body">
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
              handleAlbumClick={this.handleAlbumClick}
            />
            : null
          }
        </div>
      </div>
    );
  }
}

export default App;
