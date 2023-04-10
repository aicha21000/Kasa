
import styled from "styled-components";



const CardWrapper = styled.div`
    width: 340px;
    height: 340px;
    border-radius: 10px;
    linear-gradient : #FFFFFF 0%, #000000 50%;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    display: flex;
    margin: 1rem;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    align-items: center;
    justify-content: center;
    media (max-width: 768px) {
        width: 90%
        };

`
const CardTitle = styled.h2`

    width: 300px;    
    height: 52px;
    top: 268px;
    Left: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 25.67px;
    color: #FFFFFF;
    position: absolute;

    

`
const CardImage = styled.img`

    margin: 0;
    object-fit: cover;
    position: absolute;
    transition: all 0.3s ease-in-out;
    ${CardWrapper}:hover & {
        transform: scale(1.1);
    }
`
function CardStyle({ title, description, button, picture}) {
  return (
    <CardWrapper>
     
        
        <CardImage src={picture} alt ="image de la fiche"></CardImage>
        <CardTitle>{title}</CardTitle>
        
   
    </CardWrapper>
    
  )
}

export default CardStyle;