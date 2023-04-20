import React from "react";
import "./_index.scss";

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img className="bannerImage" src={image} alt={`banner Nature`} />
      <h2>{text}</h2>
    </div>
  );
}

export default Banner;