import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const RatingDiv = styled.div`
width: 100%;
text-align: right;
@media (max-width: 768px) {
text-align: left;  

`;

function Rating() {
  const { logName } = useParams();
  const logements = require('../data/logements.json');
  const logement = logements.find((logement) => logement.id === logName);
  const starNumber = logement.rating;
  const emptyStars = 5 - starNumber;

  const stars = [];
  const empty = [];

  for (let i = 0; i < starNumber; i++) {
    stars.push(<FaStar style={{color :'#FF6060', fontSize: '26px', width: '40px'}} key={i} />);
  }
  
  for (let i = 0; i < emptyStars; i++) {
    empty.push(<FaStar style={{color :'#bbb', fontSize: '26px', width: '40px'}} key={i} />);
  }

  return <RatingDiv>{stars}{empty}</RatingDiv>;
}

export default Rating;