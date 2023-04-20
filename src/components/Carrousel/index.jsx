import { useState } from 'react';
import { ReactComponent as ArrowLeft } from '../../assets/images/ArrowRight.svg';
import { ReactComponent as ArrowRight } from '../../assets/images/ArrowLeft.svg';
import './_index.scss';


function Carrousel({ imagesLogements }) {

  const [bannerNumber, setBannerNumber] = useState(1);
  const totalBanners = imagesLogements.length;
  const previousBanner = bannerNumber === 1 ? totalBanners : bannerNumber - 1;
  const nextBanner = bannerNumber === totalBanners ? 1 : bannerNumber + 1;

  return (
    totalBanners === 1 ? (
      <div className='carrouselWrapper'>
        <img src={imagesLogements[0]} alt={`Photo_du_logement_Numéro ${bannerNumber}`} />
      </div>) : (
      <div className='carrouselWrapper'>
        <img className='logementImage' src={imagesLogements[bannerNumber - 1]} alt={`Photo_du_logement_Numéro ${bannerNumber}`} />
        <div className='buttonArrows'>
          <button onClick={() => setBannerNumber(previousBanner)} aria-label="Bouton précédent" ><ArrowRight /></button>
          <div className='numberImage'>{bannerNumber}/{totalBanners}</div>
          <button onClick={() => setBannerNumber(nextBanner)} aria-label="Bouton suivant" ><ArrowLeft /></button>
        </div>
      </div>
    )
  )
}

export default Carrousel