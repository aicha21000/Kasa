import React from 'react';
import FilledStar from '../../assets/images/FilledStar.svg';
import EmptyStar from '../../assets/images/EmptyStar.svg';
import styled from 'styled-components';

const RatingDiv = styled.div`
  width: 100%;
  text-align: right;
  @media (max-width: 768px) {
    text-align: left;  
  }
`;

function Rating({ rating }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      i < rating ? (
        <img src={FilledStar} alt='filledStar' key={i} />
      ) : (
        <img src={EmptyStar} alt='emptyStar' key={i} />
      )
    );
  }

  return <RatingDiv>{stars}</RatingDiv>;
}

export default Rating;
