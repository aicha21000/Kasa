import { Link } from "react-router-dom";
import Banner from "../../utils/GlobalStyle/Banner";
import CardsDisplay from "../../components/CardsDisplay";
import styled from "styled-components";
import { useState, useEffect } from "react";

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #E5E5E5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    color: #fff;
    position: absolute;
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;

const CardWrapper = styled.div`
  background-color: #F6F6F6;
  border-radius: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 80%;
  padding: 0;
  margin: 20px;
`;

function Home() {
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const logements = require("../../assets/data/logements.json");
    setLogement(logements);
  }, []);

  return (
    <HomeWrapper>
      <Banner />
      <h1> Fiches </h1>
      <CardWrapper>
        {logement &&
          logement.map((id, index) => (
            <Link to={`/fiche/${id.id}`} key={`${id.name}-${index}`}>
              <CardsDisplay cover={id.cover} title={id.title} />
            </Link>
          ))}
      </CardWrapper>
    </HomeWrapper>
  );
}

export default Home;
