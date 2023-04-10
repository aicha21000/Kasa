import { BrowserRouter, Link } from 'react-router-dom';
import LOGO from "../../assets/images/LOGO.svg";
import styled from 'styled-components';

const Nav = styled.nav`
  width: 90%;
  height: 80px;
  background-color: #F6F6F6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 20px 0;
  box-sizing: border-box;
  margin: 0 auto;
  img {
    width: 210.32px;
    height: 68;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      Width: 136px;
      Height: 34px;
      Top: 17px;
      Left: 931px;
      a {
        font: Montserrat;
        color: #FF6060;
        line-height: 34.22px;
        text-decoration: none;
        font-size: 24px;
        font-weight: 500;
        &:hover {

          text-decoration: underline;

        }
      }
    }
  }
`;



function Header() {
    return (
      <Nav>
           <img src={LOGO} alt="logo" />

        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </Nav>
    );
  }
export default Header