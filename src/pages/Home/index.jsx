import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import CardsDisplay from "../../components/CardsDisplay";
import { useState, useEffect } from "react";
import image from "../../assets/images/banner.png";
import "./_index.scss";

function Home() {
  const text = "Chez vous, partout et ailleurs";
  const [logement, setLogement] = useState(null);
  useEffect(() => {
    const logements = require("../../assets/data/logements.json");
    setLogement(logements);
  }, []);

  return (
    <div className="container">
      <Banner image={image} text={text} />
    
      <div className="cardsContainer">
        {logement &&
          logement.map((id, index) => (
            <Link to={`/fiche/${id.id}`} key={`${id.name}-${index}`}>
              <CardsDisplay
              className="cards"
                key={`${id.name}-${index}`}
                cover={id.cover}
                title={id.title}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Home;
