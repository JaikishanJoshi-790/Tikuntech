import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Lopez Immigration Law</h2>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Support</a></li>
            <li><a href="/">Careers</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="/">Immigration Law</a></li>
            <li><a href="/">Consultation</a></li>
            <li><a href="/">Legal Assistance</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="right-container">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className="icon" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="icon" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Lopez Immigration. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
