import React from 'react';
import './OurTeam.css';
import dheeraj from "../../Assets/ourTeam/Dheeraj.jpeg";
import aman from "../../Assets/ourTeam/aman.jpg"
import tushar from "../../Assets/ourTeam/tushar.jpg"

const specialists = [
  {
    name: 'Dheeraj Joshi',
    title: 'Backend Developer',
    imgSrc: dheeraj, 
  },
  {
    name: 'Aman Kumar',
    title: 'Customer service',
    imgSrc: aman, 
  },
  {
    name: 'Tushar Bihan',
    title: 'Content writer',
    imgSrc: tushar,
  },
];

const Specialists = () => {
  return (
    <div className="specialists-container">
      <h2>WE KNOW ABOUT DEVELOPMENT</h2>
      <h3>Meet our team of specialists</h3>
      <div className="specialists">
        {specialists.map((specialist, index) => (
          <div key={index} className="specialist">
            <img src={specialist.imgSrc} alt={specialist.name} className="specialist-image" />
            <h4>{specialist.name}</h4>
            <p>{specialist.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialists;
