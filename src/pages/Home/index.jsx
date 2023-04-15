import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import CardsDisplay from "../../components/CardsDisplay";
import { useState, useEffect } from "react";
import image from "../../assets/images/banner.png";

function Home() {
  const [logement, setLogement] = useState(null);
  useEffect(() => {
    const logements = require("../../assets/data/logements.json");
    setLogement(logements);
  }, []);

  return (
    <div>
      <Banner image={image} />
    
      <h1> Fiches </h1>
      <div>
        {logement &&
          logement.map((id, index) => (
            <Link to={`/fiche/${id.id}`} key={`${id.name}-${index}`}>
              <CardsDisplay
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
