import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
     <>
     <div>
          <div className="navbar-upper">
        <nav className="navbarUpper">
            <div className="left-container">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <span>+123-456-7890</span>
            </div>
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
        </nav>
        </div>
        <div className="navbar-main">
          
        </div>
        </div>
        </>
    );
}

export default Navbar;
