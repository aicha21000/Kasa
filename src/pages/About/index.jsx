import React from 'react';
import data from '../../assets/data/data.json';
import Background from '../../assets/images/Background.png';
import Drop from '../../components/Dropdown';

const About = () => {

  return (
    <div>
      <img src={Background} alt='kalen-emsley-Bkci_8qcdvQ-unsplash 2' /> 
      {data.map((element, index) => (
        <Drop
          key={index}
          contentLabel={element.content}
          label={element.title}
        />
      ))}
    </div>
  );
};

export default About;
