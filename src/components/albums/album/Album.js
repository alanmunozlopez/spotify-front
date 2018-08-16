import React from 'react'
import './Album.css';

// Album card - estilo disponible en https://codepen.io/alanmunozlopez/pen/XBLoWa
const Album = () => (
  <div className="Album">
    <div className ="item-card-image">
      <figure className="post-image">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Scorpion_by_Drake.jpg/220px-Scorpion_by_Drake.jpg" />
      </figure>
      </div>
      <div className="Album-card-details">
        <p className="Album-card-details-album"> SCORPION </p>
        <p className="Album-card-details-artist"> Drake </p>
      </div>
  </div>
);

export default Album;
