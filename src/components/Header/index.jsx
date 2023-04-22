import { Link, NavLink } from 'react-router-dom';
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
          <NavLink  to="/" activeclassname="active">Accueil</NavLink>

          </li>
          <li>
          <NavLink to="/about" activeclassname="active">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
