// HeroSection.js

import React from 'react';

function HeroSection() {
  const heroStyles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/background-image.jpg)`, // Use process.env.PUBLIC_URL to get the correct path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px', // Adjust height as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center'
  };

  return (
    <section style={heroStyles}>
      <div className="hero-content">
        <h1>Welcome to Favy Kitchen</h1>
        <p>Delicious meals made with love</p>
      </div>
    </section>
  );
}

export default HeroSection;
