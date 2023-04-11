import { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { ReactComponent as ArrowLeft} from '../../assets/images/ArrowRight.svg';
import { ReactComponent as ArrowRight} from '../../assets/images/ArrowLeft.svg';
import GlobalStyle from '../../utils/GlobalStyle';

const BannerRank = styled.span` //number of the banner
 
  color: white;
  font-family: ${GlobalStyle.text.font};
  font-size: 18px;
  align-self: end;
  right: 0;
  margin: 0px 0px -150px 0;
  position: relative;
  
}`
const CarrouselWrapper = styled.div`
  width: 90%;
  height 415px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }

  `


function Carrousel() {
  const { logName } = useParams()
  const logements = require('../data/logements.json')
  const logement = logements.find(logement => logement.id === logName)
  const imagesLogements = logement ? logement.pictures : []

  const [bannerNumber, setBannerNumber] = useState(1);

  const totalBanners = imagesLogements.length;
  const previousBanner = bannerNumber === 1 ? totalBanners: bannerNumber - 1;
  const nextBanner = bannerNumber === totalBanners ? 1 : bannerNumber + 1;

  return (
  totalBanners === 1 ? <CarrouselWrapper><img src={imagesLogements[0]} alt={`Banner ${bannerNumber}`} /> </CarrouselWrapper> :

    <CarrouselWrapper>
      <img src={imagesLogements[bannerNumber - 1]} alt={`Banner ${bannerNumber}`} />
      <div>
        <button onClick={() => setBannerNumber(previousBanner)}><ArrowRight />
        </button> <BannerRank>{bannerNumber}/{totalBanners}</BannerRank>
        <button onClick={() => setBannerNumber(nextBanner)}> <ArrowLeft /></button>
      </div>
    </CarrouselWrapper>
  );
}

export default Carrousel