import React from 'react'
import './Search.css';

const Search = (props) => (
  <div className="Search">
    <input
      id="search"
      type="text"
      required="required"
      placeholder="¿Que álbum deseas?"
      value={props.albumInput}
      onChange={props.updateAlbumInput}
      onKeyPress={props.pressEnter}
    />
    <div>
    <button
      className="Search-button"
      onClick={() => { props.handleSearchAlbum() }}
      > Buscar </button>
    </div>
  </div> 
);

export default Search;
