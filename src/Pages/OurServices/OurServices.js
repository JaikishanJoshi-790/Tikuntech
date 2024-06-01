import React from 'react';
import './OurServices.css';
import { ReactComponent as FamilyImmigrationSvg } from '../../Assets/svgs/family-immigration.svg';
import { ReactComponent as EmploymentVisasSvg } from '../../Assets/svgs/employment-visas.svg';
import { ReactComponent as DeportationDefenseSvg } from '../../Assets/svgs/deportation-defense.svg';
import { ReactComponent as AsylumSvg } from '../../Assets/svgs/asylum.svg';
import { ReactComponent as CitizenshipSvg } from '../../Assets/svgs/citizenship.svg';

const servicesData = [
  {
    title: "Family Immigration",
    description: "We help families navigate the complex process of immigration and reunite with their loved ones.",
    SvgComponent: FamilyImmigrationSvg,
  },
  {
    title: "Employment Visas",
    description: "Our firm assists employers and employees in securing work visas and ensuring compliance with immigration laws.",
    SvgComponent: EmploymentVisasSvg,
  },
  {
    title: "Deportation Defense",
    description: "We provide robust defense strategies to protect individuals from deportation and ensure their rights are upheld.",
    SvgComponent: DeportationDefenseSvg,
  },
  {
    title: "Asylum",
    description: "We offer assistance to individuals seeking asylum due to persecution or fear of persecution in their home country.",
    SvgComponent: AsylumSvg,
  },
  {
    title: "Asylum",
    description: "We offer assistance to individuals seeking asylum due to persecution or fear of persecution in their home country.",
    SvgComponent: AsylumSvg,
  },
  {
    title: "Asylum",
    description: "We offer assistance to individuals seeking asylum due to persecution or fear of persecution in their home country.",
    SvgComponent: AsylumSvg,
  },
  {
    title: "Citizenship",
    description: "Our firm guides clients through the process of becoming U.S. citizens, from application to the oath ceremony.",
    SvgComponent: CitizenshipSvg,
  },
];

const OurServices = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div className="service-item" key={index}>
            <service.SvgComponent className="service-svg" />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
