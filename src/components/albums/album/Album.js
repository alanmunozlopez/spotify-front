import React from 'react'
import './Album.css';

// Album card - estilo disponible en https://codepen.io/alanmunozlopez/pen/XBLoWa
const Album = (props) => (
  <div
    className="Album"
    onClick={() => {
      props.handleAlbumClick(props.external_urls.spotify)
    }}
  >
    <div className ="item-card-image">
      <figure className="post-image">
        <img src={props.images[1].url} alt={`An display for ${props.name}`} />
      </figure>
      </div>
      <div className="Album-card-details">
        <p className="Album-card-details-album"> {props.name} </p>
        <p className="Album-card-details-artist"> {props.artists[0].name} </p>
      </div>
  </div>
);

export default Album;
