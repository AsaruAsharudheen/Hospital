import React from 'react';
import './footer.css';
const FooterSection = () => (
  <footer className="footer">
    <div className="footer-content">
      {/* Column 1: Logo and Description */}
      <div className="footer-column footer-logo-col">
        <img src="/LogoforWebsite.png" alt="" />
        <p>
          At Dentia, we're dedicated to providing high-quality, personalized
          dental care for patients of all ages. Our skilled team uses the latest
          technology to ensure comfortable, efficient treatments and beautiful,
          healthy smiles for life.
        </p>
        {/* Social Icons - assuming Font Awesome */}
        <div
          className="social-links"
          style={{ marginTop: '20px', fontSize: '20px' }}
        >
          <i
            className="fa-brands fa-facebook-f"
            style={{ marginRight: '15px' }}
          ></i>
          <i
            className="fa-brands fa-x-twitter"
            style={{ marginRight: '15px' }}
          ></i>
          <i
            className="fa-brands fa-instagram"
            style={{ marginRight: '15px' }}
          ></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>

      {/* Column 2: Company Links */}
      <div className="footer-column">
        <h3 style={{fontSize:'25px'}}>Company</h3>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Our Services</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Column 3: Our Services Links */}
      <div  className="footer-column">
        <h3 style={{fontSize:'25px'}}>Our Services</h3>
        <ul>
          <li>
            <a href="#">General Dentistry</a>
          </li>
          <li>
            <a href="#">Cosmetic Dentistry</a>
          </li>
          <li>
            <a href="#">Pediatric Dentistry</a>
          </li>
          <li>
            <a href="#">Restorative Dentistry</a>
          </li>
          <li>
            <a href="#">Preventive Dentistry</a>
          </li>
          <li>
            <a href="#">Orthodontics</a>
          </li>
        </ul>
      </div>

      {/* Column 4: Contact Information */}
      <div className="footer-column">
        <h3 style={{fontSize:'25px'}}>Contact Us</h3>
        <div className="contact-item">
          <i className="fa-solid fa-location-dot"></i>
          <div>
            <p style={{ margin: 0, color: 'white' }}>Clinic Location</p>
            <p style={{ margin: 0 }}>100 S Main St, New York, NY</p>
          </div>
        </div>
        <div className="contact-item">
          <i className="fa-solid fa-phone"></i>
          <div>
            <p style={{ margin: 0, color: 'white' }}>Call Us</p>
            <p style={{ margin: 0 }}>+1 123 456 789</p>
          </div>
        </div>
        <div className="contact-item">
          <i className="fa-solid fa-envelope"></i>
          <div>
            <p style={{ margin: 0, color: 'white' }}>Send a Message</p>
            <p style={{ margin: 0 }}>contact@dentiacare.com</p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Copyright Bar */}
    <div className="footer-bottom">
      <p style={{ display: 'inline-block', margin: '0' }}>
        Copyright 2025 - Dentia by Designesia
      </p>
      <a href="#">Terms & Conditions</a>
      <a href="#">Privacy Policy</a>
    </div>
  </footer>
);
export default FooterSection;
