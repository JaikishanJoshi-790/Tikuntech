import React from 'react';
import './Testimonials.css';
import harsha from "../../Assets/ourTeam/harsha.png"
import joshua from "../../Assets/ourTeam/joshua.jpg"

const testimonials = [
  {
    name: "William Smith",
    image: harsha,
    rating: 5,
    review: "Dr. Zulma sponsored my naturalization case, which was somewhat complicated due to permanence issues and minor offenses. I attest that together with Lisa they did an extremely professional job, the advice was always adequate and above all honest, I am grateful that she accompanied my case until the end even in the interview, today I am an American citizen. Highly recommend Dr. Zulma and her team."
  },
  {
    name: "John Smith",
    image: joshua,
    rating: 5,
    review: "I have nothing but gratitude for lawyer Zulma Lopez, from the beginning of my request for my three children, she helped me with everything, she clarified all my doubts with all the professionalism, she guided me throughout the process, and the results were the best, a thousand blessings To Zulmita, her family, and her work team, thank you so much for everything."
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h4>TESTIMONIALS</h4>
      <h2>What our clients say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-card-upper">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            
            <h3>{testimonial.name}</h3>
            <div className="testimonial-rating">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <div className="testimonial-google-icon">G</div>
            </div>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </div>
      <button className="read-more-button">Read More Testimonials</button>
    </div>
  );
};

export default Testimonials;
