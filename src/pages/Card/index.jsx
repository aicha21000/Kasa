import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carrousel from "../../components/Carrousel";
import { useParams, useNavigate } from "react-router-dom";
import Rating from "../../components/Rating";
import Description from "../../components/Dropdown/Description";
import Equipments from "../../components/Dropdown/Equipement";
import Tags from "../../components/Tags";
import GlobalStyle from "../../utils/GlobalStyle";
import Error from "../Error";


const Container = styled.div`

`;

function Card() {
  const { logName } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const logements = require('../About/logements.json');
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
  } else {
    return null;
  }
}

export default Card;
