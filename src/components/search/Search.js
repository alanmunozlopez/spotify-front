import React from 'react'
import './Search.css';

const Search = (props) => (
  <div className="Search">
    <input
      id="search"
      type="text"
      name="search"
      placeholder="Ingresa el nombre de album"
      value={props.albumInput}
      onChange={props.updateAlbumInput}
      onKeyPress={props.pressEnter}
    />
    <button
      onClick={() => { props.handleSearchAlbum() }}
    > Buscar </button>
  </div> 
);

export default Search;
