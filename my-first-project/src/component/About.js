// About.js

import React, { useState, useEffect } from 'react';
import './About.css'; // Import the CSS file

function About() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Set isAnimated to true after the component mounts to trigger the animation
    setIsAnimated(true);
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    <section id="about" className={isAnimated ? 'about-container animated-background' : 'about-container'}>
      <div className="about-content">
        <h2>About Us</h2>
        <p>Favy Kitchen is a family-owned restaurant dedicated to serving delicious and healthy meals made from locally-sourced ingredients. Our journey began with a passion for cooking and a commitment to providing our customers with exceptional dining experiences.</p>
        <div className="chef-bio">
          <h3>John Smith, Head Chef</h3>
          <p>With over 15 years of experience in the culinary industry, Chef John Smith brings creativity and expertise to our kitchen. He is passionate about crafting unique dishes that delight the taste buds and elevate the dining experience.</p>
        </div>
        <div className="our-story">
          <h3>Our Story</h3>
          <p>Founded in 2010 by siblings Emily and David, Favy Kitchen started as a small cafe in the heart of the city. Over the years, our dedication to quality and customer satisfaction has allowed us to expand our offerings and establish ourselves as a beloved dining destination.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
