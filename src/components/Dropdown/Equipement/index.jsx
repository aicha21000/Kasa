import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as Open} from '../../../assets/images/Open.svg';
import { ReactComponent as Close} from '../../../assets/images/Close.svg';
import styled from 'styled-components';
import GlobalStyle from '../../../utils/GlobalStyle';





const Dropdown = styled.div`
width : 45%;
position: relative;
display: flex;
flex-direction: column;
color: #444;

height: 250px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 20px;
    height: auto;
  
  };

.dropdownHeader {
  cursor: pointer;
width: 100%;
position: sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    height: 52px;
    background-color: #ff6060;
    border-radius: 10px;
    z-index: 1;
    padding: 0;
    margin: 0;
    cursor: pointer;
}
h3 {
font-family: ${GlobalStyle.text.font};
padding: 0 10px;     
}

.dropdownDescription {

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
top: 10px;
left: 15px;
}
ul {
list-style-type: none;
padding: 10px;
  margin: 0;
  text-align: justify;
  font-family: ${GlobalStyle.text.font};
  


}
li {
padding: 0;
margin: 10px;

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


function Equipments({ equipments }) {

    const { logName } = useParams();
    const logements = require('../../data/logements.json');
    const logement = logements.find((logement) => logement.id === logName);
    equipments = logement.equipments;
		


  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <Dropdown>

    <div className="dropdownHeader" onClick={toggleDropdown}>
    <h3>Equipements</h3>{isOpen ? <Open className="open"/> : <Close className="close"/>}
  </div>
      {isOpen ? <div  className="dropdownDescription"> 
        <ul>
          {equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul></div> : null
  }
    </Dropdown>
  );
}



export default Equipments;