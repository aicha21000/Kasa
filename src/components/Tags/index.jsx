import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../../utils/GlobalStyle';

const TagDiv = styled.div`
`;

function Tags({ label }) {
  const { logName } = useParams();
  const logements = require('../data/logements.json');
  const logement = logements.find((logement) => logement.id === logName);
  const [tags, setTags] = useState(logement.tags);

  useEffect(() => {
    setTags(logement.tags);
  }, [logement.tags]);

  return (
    <TagDiv>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </TagDiv>
  );
}

export default Tags;