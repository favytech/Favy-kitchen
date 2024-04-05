// Header.js

import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/image/resto.png" alt="Favy Kitchen Logo" />
        <h1>Favy Kitchen</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
