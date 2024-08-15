// src/components/Contact.jsx

import React from 'react';
import './Contact.css'; // Add this for custom styling

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Fill out the form below to get in touch.</p>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
