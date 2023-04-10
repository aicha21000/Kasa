import { useState } from 'react';
import styled from 'styled-components';
import image from "../../assets/images/banner.png";

const BannerWrapper = styled.div`
  width: 100%;
  height 200px;
  padding: 0;
  margin: 0 auto;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: 30%;
  blend: Darken;

  
  img {
    margin: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
  }
  h1 {
    font-size: 2rem;
    font-weight: 500;
    color: #fff;
    position: absolute;
    margin: 0;
    padding: 0;
    text-align: center;
  }



  `

function Banner() {

  return (
    
    <BannerWrapper>
      
      <img src={image} alt={`banner Nature`} />
      <h1>Chez vous, partout et ailleurs</h1>
      
    </BannerWrapper>
  );
}

export default Banner