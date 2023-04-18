import React from 'react';
import FilledStar from '../../assets/images/FilledStar.svg';
import EmptyStar from '../../assets/images/EmptyStar.svg';
import './_index.scss'

function Rating({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      i < rating ? (
        <img className='stars' src={FilledStar} alt='filledStar' key={i}  />
      ) : (
        <img className='stars' src={EmptyStar} alt='emptyStar' key={i} />
      )
    );
  }
  return <div className='ratingDiv'>{stars}</div>;
}

export default Rating;
