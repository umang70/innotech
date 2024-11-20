import React from 'react';
//import Shivam from 'shivam.png';
import shiv from "../images/shivam.png";
import umangg from "../images/umang.jpg";
import tash from "../images/tashi.jpg";
import shikh from "../images/shikhar.jpg"


const founders = [
  {
    name: 'UMANG SHARMA',
    role: 'Full Stack Developer , Designer ', 
    image:  umangg
 ,
  

  },

  {
    name: 'Shivam Gupta',
    role: 'Front-end Developer',
    image: shiv , // Replace with actual image file
  },

  {
    name: 'Tashi Verma',
    role: 'Front-end Developer',
    image: tash, // Replace with actual image file
  },
  {
    name: 'Shikar Anand',
    role: 'Content Writer',
    image: shikh ,// Replace with actual image file
  },
];

const Volunteer = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="founders">
        {founders.map((founder, index) => (
          <div key={index} className="founder">
            <div className="founder-image">
              { <img src={founder.image} alt={founder.name} /> 
              }
             
             
            </div>
            
            <div className="founder-details">
              <h3>{founder.name}</h3>
              <p>{founder.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;

  