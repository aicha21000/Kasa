import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as Open} from '../../../assets/images/Open.svg';
import { ReactComponent as Close} from '../../../assets/images/Close.svg';
import styled from 'styled-components';

const Dropdown = styled.div`
  width : 45%;
  position: relative;
  display: flex;
  flex-direction: column;
  color: #444;
  cursor: pointer;

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
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 20px;
  top: 15px;

}
li {
  padding: 0;
  margin: 0;
  
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

`


function Description({ label, description }) {

    const { logName } = useParams();
    const logements = require('../../data/logements.json');
    const logement = logements.find((logement) => logement.id === logName);
    description = logement.description;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Dropdown>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h3>Description</h3>{isOpen ? <Open className="open" /> : <Close className="close" />}
      </div>
      {isOpen && <div className="dropdown-description"><div className='description-text'>{description}</div></div>}
    </Dropdown>
  );
}

export default Description;