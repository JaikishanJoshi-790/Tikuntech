import React from 'react';
import './AboutUs.css';
import aboutUsImage from '../../Assets/aboutusimage.jpg';

const AboutUs = () => {
  return (
    <section className="about-us">
    <div className="about-us-content">
      <div className="about-us-text">
        <h5>About Us</h5>
        <h2>At Lopez Immigration Law we know that each immigration case can change the lives of our clients and their families.</h2>
        <p>Don't risk your family's future by leaving your case in the hands of an inexperienced attorney. At Lopez Immigration Law we will strive to provide you with the best legal service.</p>
        <a href="/" className="about-us-button">MY BIOGRAPHY</a>
      </div>
      <div className="about-us-image">
        <img src={aboutUsImage} alt="About Us" />
      </div>
    </div>
  </section>
  );
}

export default AboutUs;
