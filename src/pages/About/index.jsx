import React from 'react';

import data from '../../assets/data/data.json';
import Background from '../../assets/images/Background.png';
import Drop from '../../components/Dropdown';

const About = () => {


  return (
    <div>
      <img src = {Background} alt='kalen-emsley-Bkci_8qcdvQ-unsplash 2' />` 
      <div>
      {data.map((element, index) => (
        <div key={index}>
          {element && (
            <Drop
              contentLabel={element.content}
              label={element.title}
              
            />
          )}
        </div>
      ))}
    </div>
    </div>
  );
};


export default About;
