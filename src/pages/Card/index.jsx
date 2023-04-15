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
    <div className="card">
      <Carrousel imagesLogements={pictures} className="cardCarousel" />
      <h1 className="cardTitle">{title}</h1>
      <p className="cardLocation">{location}</p>
      <Tags tags={tags} className="cardTags" />
      <div className="cardHost">
        <img src={host.picture} alt="imageHost"></img>
        <p>{host.name}</p>
      </div>
      <Rating rating={rating} className="cardRating" />
      <Drop contentLabel={description} label="Description" className="cardDropdown" />
      <Drop contentLabel={<ul>{equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>} label="Equipements" className="cardDropdown" />
    </div>
  );
}

export default Card;
