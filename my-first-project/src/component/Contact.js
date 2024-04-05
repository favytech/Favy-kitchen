// Contact.js

import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>Email: info@favykitchen.com</p>
          <p>Phone: +234 80-456-7890</p>
          <p>Address: 123 Main Street, City, Nigeria</p>
        </div>
        <div className="contact-form">
          <h3>Send us a message</h3>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
