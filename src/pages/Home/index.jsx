import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import CardsDisplay from "../../components/CardsDisplay";
import { useState, useEffect } from "react";
import image from "../../assets/images/banner.png";
import "./_index.scss";
import logements from"../../assets/data/logements.json"

function Home() {
  const text = "Chez vous, partout et ailleurs";
  const [logement, setLogement] = useState(null);

  useEffect(() => {

    setLogement(logements);
  }, []);

  return (
    <div className="container">
      <Banner image={image} text={text} />

      <div className="cardsContainer">
        {logement &&
          logement.map((id, index) => (
            <div className="cardUnit" key={`${id.name}-${index}`}>
              <Link to={`/fiche/${id.id}`}>
                <CardsDisplay cover={id.cover} title={id.title} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
