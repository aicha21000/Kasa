
import React from 'react';
import LOGO from '../../assets/images/LogoWhite.svg';

import styled from 'styled-components';

const FooterDiv = styled.div`

background-color: black;
color: #fff;
padding: 50px;
margin-top: 50px;
text-align: center;
img {
    width: 122px;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;

  }
p {
  color: #fff;
  Font-size: 24px;
`;

function Footer() {
    return (
        <FooterDiv>
     <img src={LOGO} alt='LogoImage'/>
     <p>© 2020 Kasa. All rights reserved</p>
     </FooterDiv>
    );
  }
export default Footer