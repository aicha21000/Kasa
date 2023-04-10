import React, { useState } from 'react';
import { ReactComponent as Open } from '../..//assets/images/Open.svg';
import { ReactComponent as Close } from '../..//assets/images/Close.svg';
import data from '../../components/data/data.json';

import styled from 'styled-components';
import Background  from '../../assets/images/Background.png';

const AboutPage = styled.div`
  
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  img {
    width: 90%;
    height: 223px;
    border-radius: 1rem;
    background-color: #000000;
    mix-blend-mode: darken;
    opacity: 0.3;

  `
const Dropdown = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  color: #444;
  cursor: pointer;
  width: 80%;
  transition: 0.4s;
  margin: 20px;
.dropdown-header {
  width: 100%;
  position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: white;
      height: 52px;
      background-color: #ff6060;
      border-radius: 10px;
      z-index: 1;
      padding: 0;
      margin: 0 0  20px 0;
      cursor: pointer;
}

.open {
  width: 20px;
  height: 20px;
  padding: 10px;
}
.close {
  width: 20px;
  height: 20px;
  padding: 10px;
}
h3 {
  padding: 0 10px;     
}

.dropdown-description {
  position: relative;
  width: 100%;
  color: #FF6060;
  font : montserrat;
  font-size : 18px;
  margin: 0;
  padding: 0;
  background-color: #F7F7F7;
  overflow: hidden;
  height: 200px;
border-radius: 5px;
top: -30px;

p {
  background-color: transparent;
  padding: 10px;



`

const About = () => {
  const [selectedElement, setSelectedElement] = useState(null);

  const toggleDropdown = (index) => {
    if (index === selectedElement) {
      setSelectedElement(null);
    } else {
      setSelectedElement(index);
    }
  };

  return (
    <AboutPage>
    <img src={Background} alt='kalen-emsley-Bkci_8qcdvQ-unsplash 2' />
    <Dropdown>


      
      {data.map((element, index) => ( <div> 
        <div key={index} className="dropdown-header" onClick={() => toggleDropdown(index)}>
          <h3>{element.title}</h3>
          {selectedElement === index ? <Open className="open" /> : <Close className="close" />}</div>
          {selectedElement === index && (
            <div className="dropdown-description"><p>{element.content}</p></div>
          )}
        
        </div>
      ))}
    </Dropdown>
    </AboutPage>
  );
};

export default About;