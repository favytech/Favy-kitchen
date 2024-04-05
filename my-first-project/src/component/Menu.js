// Menu.js

import React from 'react';
import './Menu.css';

function Menu() {
  // Sample menu data
  const menuItems = [
    {
      name: "Item 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.",
      image: "/item1.jpg" // Provide the path to your image
    },
    {
      name: "Item 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.",
      image: "/item2.jpg"
    },
    {
      name: "Item 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.",
      image: "/item3.jpg"
    },
    // Add more menu items here
  ];

  return (
    <section id="menu">
      <div className="menu-container">
        <h2>Our Menu</h2>
        <div className="menu-items">
          {menuItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
