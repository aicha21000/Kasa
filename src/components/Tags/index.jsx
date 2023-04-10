import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../../utils/GlobalStyle';

const TagDiv = styled.div`

    display: flex;
    width: 45%;
    flex-direction: row;
    align-items: center;
    background-color: #F6F6F6;
    border-radius: 1rem;
    padding: 0;
    margin: 0;
    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        width: 100%;
        height: 100%;
        padding: 0;
        background-color: #F6F6F6;
        li {
            font-family: ${GlobalStyle.text.font};
            margin: 0 5px;
            position: relative;
            width: 115px;
            height: 25px;
            background: ${GlobalStyle.colors.primary};
            border-radius: 10px;
            list-style: none;
            border-radius: 10px;
            font-size: 14px;
            text-align: center;
            line-height: 19.96px;
            weight: 500;
            color: #fff;
            
        }
    }
`;

function Tags({ label, tags }) {

    const { logName } = useParams();
    const logements = require('../data/logements.json');
    const logement = logements.find((logement) => logement.id === logName);
    tags = logement.tags;

  return (

  <TagDiv>
        <ul>
          {tags.map((tags, index) => (
            <li key={index}>{tags}</li>
          ))}
        </ul></TagDiv>
  

  );
          }



export default Tags;