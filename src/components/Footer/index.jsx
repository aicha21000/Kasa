import React from 'react';
import LOGO from '../../assets/images/LogoWhite.svg';
import './_index.scss';
function Footer() {
  return (
    <div className='footerDiv'>
      <img src={LOGO} alt='Kasa Logo' />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
export default Footer