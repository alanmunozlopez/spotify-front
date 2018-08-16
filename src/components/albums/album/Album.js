import React from 'react'
import './Album.css';

// Album card - estilo disponible en https://codepen.io/alanmunozlopez/pen/XBLoWa
const Album = (props) => (
  <div className="Album">
    <div className ="item-card-image">
      <figure className="post-image">
        <img src={props.images[1].url} />
      </figure>
      </div>
      <div className="Album-card-details">
        <p className="Album-card-details-album"> {props.name} </p>
        <p className="Album-card-details-artist"> {props.artists[0].name} </p>
      </div>
  </div>
);

export default Album;
