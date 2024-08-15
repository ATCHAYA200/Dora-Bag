// src/components/About.jsx

import React from 'react';
import './About.css'; // Custom styling

function About() {
  return (
    <div className="about-page-wrapper">
      <div className="about-page">
        <section className="hero">
          <div className="hero-content">
            <h1>About Us</h1>
            <p>Discover our mission, vision, and the passionate team driving our success.</p>
          </div>
        </section>
        <section className="info-sections">
          <div className="info-card">
            <h2>Our Mission</h2>
            <p>We strive to deliver innovative solutions that solve real-world problems and exceed our customers' expectations.</p>
          </div>
          <div className="info-card">
            <h2>Our Vision</h2>
            <p>Our vision is to lead the industry through continuous innovation and dedication to excellence.</p>
          </div>
          <div className="info-card">
            <h2>Our Values</h2>
            <p>Integrity, innovation, and customer satisfaction are at the core of everything we do.</p>
          </div>
        </section>
        <section className="ceo-section">
          <h2>CEO & Founder</h2>
          <div className="ceo-info">
            <p><strong>Atchaya V</strong></p>
            <p>CEO & Founder</p>
          </div>
        </section>
        <section className="contact">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Reach out to us for any inquiries or feedback.</p>
          <button className="contact-button">Contact Us</button>
        </section>
      </div>
    </div>
  );
}

export default About;
