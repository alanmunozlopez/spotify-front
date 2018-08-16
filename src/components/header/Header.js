import React from 'react'

import './Header.css';
import logo from '../../assets/images/logo.svg';

const Header = () => (
  <header className="Header">
    <img src={logo} className="Header-logo" alt="logo" />
    <h1 className="Header-title">Project Albums </h1>
  </header>
);

export default Header;
