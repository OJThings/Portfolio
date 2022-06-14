import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoJ from '../assets/images/logo-j.png';
import LogoSubtitle from '../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoJ} alt="logo" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="s">
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/jeeeeerome7">
              <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="s">
              <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="s">
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
