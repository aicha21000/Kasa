import React from 'react';
import './_index.scss';

function Tags({ tags }) {
  return (
    <div className='tagDiv'>
      <ul>
        {tags.map((tags, index) => (
          <li key={index}>{tags}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tags;