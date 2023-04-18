import React from 'react';
import data from '../../assets/data/data.json';
import Banner from '../../components/Banner';
import Drop from '../../components/Dropdown';
import image from '../../assets/images/Background.png';
import './_index.scss';

const About = () => {

  return (
    <div className='container'>
      <Banner image={image} />
      <div className='dropdownDiv'>
        {data.map((element, index) => (
          <Drop
            key={index}
            contentLabel={element.content}
            label={element.title}
          />
        ))
        }
      </div>
    </div>
  )
}

export default About;
