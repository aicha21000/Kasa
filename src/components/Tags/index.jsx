import React from 'react';
import styled from 'styled-components';

const TagDiv = styled.div`
`;

function Tags({ tags }) {

  return (
    <TagDiv>
      <ul>
        {tags.map((tags, index) => (
          <li key={index}>{tags}</li>
        ))}
      </ul>
    </TagDiv>
  );
}

export default Tags;