import React from 'react';
import LOGO from '../../assets/images/LogoWhite.svg';

function Footer() {
  return (
    <div className='footerDiv'>
      <img src={LOGO} alt='LogoImage' />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
export default Footer