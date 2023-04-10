import { useEffect, useState } from "react"
import styled from "styled-components"
import Carrousel from "../../components/Carrousel"
import { useParams } from "react-router-dom"
import Rating from "../../components/Rating"
import Description from "../../components/Dropdown/Description"
import Equipments from "../../components/Dropdown/Equipement"
import Tags from "../../components/Tags"
import GlobalStyle from "../../utils/GlobalStyle"

const ContentPage = styled.div`
position: relative;
width: 90%; 
height: 100%;
margin: 0 auto;
background-color: ${GlobalStyle.colors.background};
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
justify-content: space-between;

`  
const Info = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
@media (max-width: 768px) {
  width: 100%
  };
`
const TitleLocation = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
@media (max-width: 768px) {
  width: 100%
  };
`
const Titre = styled.h1`

font-family: ${GlobalStyle.text.font};
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 142.6%;
/* or 51px */
margin: 0;
align-items: flex-end;
color: ${GlobalStyle.colors.primary};
@media (max-width: 768px) {
  width: 100%
  };
`
const Location = styled.h2`
flex: 1;
left: 6.94%;
right: 80.83%;
top: 60.94%;
bottom: 36.52%;
font-family: ${GlobalStyle.text.font};
font-style: normal;
font-weight: 500;
font-size: 18px;
text-align: left;
line-height: 142.6%;
/* identical to box height, or 26px */
display: flex;
align-items: start;
color: ${GlobalStyle.colors.primary};
margin: 0;
padding: 0;
@media (max-width: 768px) {
  width: 100%;
  };
`

const TagsHost = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
@media (max-width: 768px) {
  flex-direction: row-reverse;
  width: 100%;
  };
`
const HostName = styled.div`
width: 100%;
top: 573px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: right;
align-items: flex-end;
text-align: right;

p {
font-family: ${GlobalStyle.text.font};
width: 80px;
padding: 10px;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;

}

color: #FF6060;
.dot {
  height: 90px;
  width: 90px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
`
const More = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
@media (max-width: 768px) {
  flex-direction: column;

  width: 100%;
  };
`

function Card() {
const { logName } = useParams()
const logements = require('../About/logements.json')
 const logement = logements.find(logement => logement.id === logName)
 if (!logement) {
  return <div>Logement introuvable</div>
 }

    return (
      <div>
   <Carrousel />
  <ContentPage>
        <Info>
      <TitleLocation >
       <Titre> {logement.title} </Titre>
        <Location> {logement.location }</Location>
        </TitleLocation>
         <Tags />
         </Info>
        <TagsHost>
          <HostName>
        <p> {logement.host.name}</p>
        <span className="dot"></span>
        </HostName>
        <Rating />
        </TagsHost>
        <More>
        <Description />
        <Equipments />
        </More>
  </ContentPage>

      </div>
    )
  }
  export default Card

   
 