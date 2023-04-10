import { useEffect, useState } from "react"
import CardStyle from "../../components/CardStyle"
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
const TitleLocation = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
`
const Titre = styled.h1`
position: relative;

font-family: ${GlobalStyle.text.font};
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 142.6%;
/* or 51px */
display: flex;
align-items: flex-end;
color: ${GlobalStyle.colors.primary};
`
const Location = styled.h2`
flex: 1;
position: relative;
left: 6.94%;
right: 80.83%;
top: 60.94%;
bottom: 36.52%;
font-family: ${GlobalStyle.text.font};
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
/* identical to box height, or 26px */
display: flex;
align-items: flex-end;
color: ${GlobalStyle.colors.primary};
`


const HostName = styled.div`
width: 50%;
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


function Card() {
const { logName } = useParams()
const logements = require('../About/logements.json')
 const logement = logements.find(logement => logement.id === logName)

    return (
      <div>
   <Carrousel />
  <ContentPage>
        <TitleLocation>
       <Titre> {logement.title} </Titre>
        <Location> {logement.location }</Location>
        </TitleLocation>
        <HostName>
        <p> {logement.host.name}</p>
        <span class="dot"></span>
        </HostName>
        <Tags />
        
        <Rating />
        <Description />
        <Equipments />
  </ContentPage>

      </div>
    )
  }
  export default Card

   
 