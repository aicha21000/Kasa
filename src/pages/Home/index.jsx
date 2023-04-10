import { Link } from "react-router-dom"
import Banner from "../../components/Banner"
import CardStyle from "../../components/CardStyle"
import styled from "styled-components"
import { useParams } from "react-router-dom"





const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #E5E5E5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
 
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

const CardWrapper = styled.div`

  background-color: #F6F6F6;
  border-radius: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 80%;
  padding: 0;
  margin: 20px;

`


function Home() {
  const logements = require('../About/logements.json')
  return (
    <HomeWrapper>
        
  
      <Banner />

       
        <h1> Fiches </h1> 
        <CardWrapper>

        {logements.map((id, index) => (
          <Link to={`/fiche/${id.id}`} key={`${id.name}-${index}`}>
            <CardStyle
                
                cover={id.cover}
                title={id.title}
                picture={id.cover}
            />
          </Link>
        ))}
      </CardWrapper>



    </HomeWrapper>
  )
}
export default Home
