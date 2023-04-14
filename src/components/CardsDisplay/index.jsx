import React from "react";
import "./_index.scss"

function CardsDisplay({ title, cover}) {
  return (
    <div className="cardWrapper">
      <img className="cardImage cardImage--unique" src={cover} alt="imagedelafiche" />
      <h2>{title}</h2>
    </div>
  );
}

export default CardsDisplay;