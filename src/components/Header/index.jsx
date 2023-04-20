import { Link } from 'react-router-dom';
import LOGO from "../../assets/images/LOGO.svg";
import './_index.scss';

function Header() {
  return (
    <div className='headerContainer'>
      <div className='logo'>
        <Link to="/">
          <img src={LOGO} alt="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
