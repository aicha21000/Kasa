import React from 'react';
import FilledStar from '../../assets/images/FilledStar.svg';
import EmptyStar from '../../assets/images/EmptyStar.svg';

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
  return <div className='ratingDiv'>{stars}</div>;
}

export default Rating;
