import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carrousel from "../../components/Carrousel";
import { useParams } from "react-router-dom";
import Rating from "../../components/Rating";
import Description from "../../components/Dropdown/Description";
import Equipments from "../../components/Dropdown/Equipement";
import Tags from "../../components/Tags";
import GlobalStyle from "../../utils/GlobalStyle";

const Container = styled.div`

`;

function Card() {
  const { logName } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const logements = require('../About/logements.json');
    const foundLogement = logements.find((logement) => logement.id === logName);

    if (!foundLogement) {
      console.log("Logement introuvable");
    } else {
      setLogement(foundLogement);
    }
  }, [logName]);

  if (!logement) {
    return null; 
  }

  return (
    <Container>
      <Carrousel />
      <div>
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
        <Tags />
        <p>{logement.host.name}</p>
        <img src={logement.host.picture} alt="imageHost"></img>
        <Rating />
        <Description />
        <Equipments />
      </div>
    </Container>
  );
}

export default Card;
