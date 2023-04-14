import { Link } from "react-router-dom";
import Banner from "../../utils/GlobalStyle/Banner";
import CardsDisplay from "../../components/CardsDisplay";
import { useState, useEffect } from "react";

function Home() {
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const logements = require("../../assets/data/logements.json");
    setLogement(logements);
  }, []);

  return (
    <div>
      <Banner />
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
