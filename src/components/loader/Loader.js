import React from 'react';
import './Loader.css';

import logo_white from '../../assets/images/spotify_white.svg';

const Loader = () => (
  <div className="Loader">
    <div className="Loader-container">
      <img src={logo_white} className="Loader-logo" alt="logo" />
    </div>
  </div>
);

export default Loader;
