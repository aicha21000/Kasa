import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorDiv = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  background: #E5E5E5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    position: relative;
    width: 597px;
    height: 263px;
    margin: 50px 0  20px 0;

    
    font: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 288px ;


    display: flex;
    align-items: center;
    text-align: center;
    
    color: #FF6060;
  }
  p {
    position: relative;
    
    font: 'Montserrat';
    font-weight: 500;
    font-size: 36px;
    line-height: 142.6%;

    
    display: flex;
    align-items: flex-end;
    text-align: center;
    
    color: #FF6060;
  }
  a {
    position: relative;
    font-size: 18px;
    
    font: 'Montserrat';
    font-style: normal;
    font-weight: 500;

    line-height: 142.6%;
    /* identical to box height, or 20px */
    
    display: flex;
    align-items: flex-end;
    text-decoration-line: underline;
    
    color: #FF6060;
  }
`


function Error() {
  return (
    <ErrorDiv>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>

    </ErrorDiv>
  )
}
export default Error