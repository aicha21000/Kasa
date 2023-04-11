import { BrowserRouter, Link } from 'react-router-dom';
import LOGO from "../../assets/images/LOGO.svg";
import styled from 'styled-components';
import GlobalStyle from '../../utils/GlobalStyle';

const Nav = styled.nav`
img {
  cursor: pointer;
}

  height: 80px;
  background-color: ${GlobalStyle.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 20px 0;
  box-sizing: border-box;
  padding: 20px;
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
        font-family: ${GlobalStyle.text.font};
        font-style: ${GlobalStyle.text.fontStyle}, sans-serif;
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
    const handleClick = () => {
    window.location.href = "/";
  };
    return (
      <Nav>
           <img src={LOGO} alt="logo" onClick={handleClick}/>

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