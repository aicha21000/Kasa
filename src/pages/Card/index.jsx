import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carrousel from "../../components/Carrousel";
import { useParams, useNavigate } from "react-router-dom";
import Rating from "../../components/Rating";

import Tags from "../../components/Tags";
import Drop from "../../components/Dropdown";



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
    const { pictures, title, location, host, rating, description, equipments } =
      logement;
    return (
      <Container>
        {logement && <Carrousel imagesLogements={pictures} />}
        <div>
          <h1>{title}</h1>

          <p>{location}</p>
          <Tags />
          <p>{host.name}</p>
          <img src={host.picture} alt="imageHost"></img>
          {logement && <Rating rating={rating} />}
          {logement && <Drop contentLabel={description} label="Description" />}
          {logement && (
            <Drop
              contentLabel={
                <ul>
                  {equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              }
              label="Equipements"
            />
          )}

        </div>
      </Container>
    );
  } else {
    return null;
  }
}

export default Card;
