import React from "react";
import "./_index.scss";


function Banner({ image }) {

  return (
    
    <div className="banner">
      
      <img className="bannerImage" src={image} alt={`banner Nature`} />
      <h1>Chez vous, partout et ailleurs</h1>
      
    </div>
  );
}

export default Banner