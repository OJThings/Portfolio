// import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br />I'm&nbsp;
          {/* <img src={LogoTitle} alt="developer" /> */}
          Jerome
          <br />
          web developer
        </h1>
        <h2>Frontend Developer / Javascript </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
