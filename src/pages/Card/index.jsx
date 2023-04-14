import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carrousel from "../../components/Carrousel";
import { useParams, useNavigate } from "react-router-dom";
import Rating from "../../components/Rating";
import Description from "../../components/Dropdown/Description";
import Equipments from "../../components/Dropdown/Equipement";
import Tags from "../../components/Tags";
import Drop from "../../components/Dropdown/Drop";



const Container = styled.div`

`;

function Card() {
  const { logName } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);


  useEffect(() => {
    const logements = require('../../assets/data/logements.json');
    const foundLogement = logements.find((logement) => logement.id === logName);

    if (!foundLogement) {
      setLogement(null);
      navigate('/error');
    } else {
      setLogement(foundLogement);
    }
  }, [logName, navigate]);

  if (logement) {
    return (
      <Container>
{logement && <Carrousel imagesLogements={logement.pictures} />}
        <div>
          <h1>{logement.title}</h1>
          
          <p>{logement.location}</p>
          <Tags />
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt="imageHost"></img>
          <Rating />
          
          {logement && <Drop contentLabel={logement.description} label ="Description" />}
          {logement && <Drop contentLabel={logement.equipments} label ="Equipements" />}
        </div>
      </Container>
    );
  } else {
    return null;
  }
}

export default Card;
