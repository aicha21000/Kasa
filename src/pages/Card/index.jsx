import React, { useState, useEffect } from "react";
import Carrousel from "../../components/Carrousel";
import { useParams, useNavigate } from "react-router-dom";
import Rating from "../../components/Rating";
import Tags from "../../components/Tags";
import Drop from "../../components/Dropdown";
import "./_index.scss";


function Card() {
  const { logName } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const logements = require("../../assets/data/logements.json");
    const foundLogement = logements.find(
      (logement) => logement.id === logName
    );
    setLogement(foundLogement);
  }, [logName]);

  if (!logement) {
    navigate("/error");
    return null;
  }

  const { pictures, title, location, host, rating, description, equipments, tags } = logement;

  return (
    <div className="card container">
      <div className="cardCarrousel">
        <Carrousel imagesLogements={pictures} />
      </div>
      <div className="info">
        <h1 className="cardTitle">{title}</h1>
        <p className="cardLocation">{location}</p>
        <div className="cardTags">
          <Tags tags={tags} />
        </div>

      </div>
      <div className="hostRate">
        <div className="cardHost">
          <p>{host.name}</p>
          <img src={host.picture} alt="imageHost"></img>
        </div>

        <div className="cardRating">
          <Rating rating={rating} />
        </div>
      </div>
      <div className="cardDropdown">
        <Drop contentLabel={description} label="Description" />
      </div>
      <div className="cardDropdown">
        <Drop contentLabel={<ul>{equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>} label="Equipements" />
      </div>
    </div>
  );
}

export default Card;
