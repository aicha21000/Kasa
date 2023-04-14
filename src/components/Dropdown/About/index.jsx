import React, { useState } from 'react';
import { ReactComponent as Open } from '../../../assets/images/Open.svg';
import { ReactComponent as Close } from '../../../assets/images/Close.svg';
import data from '../../../assets/data/data.json';
import Background from '../../../assets/images/Background.png';
import Drop from '../Drop';

const About = () => {
  const [selectedElements, setSelectedElements] = useState([]);

  const toggleDropdown = (index) => {
    const currentIndex = selectedElements.indexOf(index);
    setSelectedElements(
      currentIndex === -1 ? [...selectedElements, index] : selectedElements.filter((i) => i !== index)
    );
  };

  return (
    <div>
      <Drop label={data[0]} />
      <img src={Background} alt="kalen-emsley-Bkci_8qcdvQ-unsplash 2" />
      <div>
        {data.map((element, index) => (
          <div key={`${element.name}-${index}`}>
            <div className="dropdown-header" onClick={() => toggleDropdown(index)}>
              <h3>{element.title}</h3>
              {selectedElements.includes(index) ? <Open className="open" /> : <Close className="close" />}
            </div>
            {selectedElements.includes(index) && (
              <div className="dropdown-description">
                <p>{element.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
