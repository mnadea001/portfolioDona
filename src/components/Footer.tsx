import './Footer.css';
import ArrowUpIcon from '../assets/icons/ArrowUpIcon';
// import gsap from "gsap";
// import { useEffect } from 'react';

const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">

      <div className="footer-content">
        <ul className="footer-links">
          <li>
            <a className="footer-link" href="https://www.facebook.com/matilda.dona.dub/" target="_blank">
              Facebook 
            </a>
          </li>
          <li>
            <a className="footer-link" href="https://www.instagram.com/matildadona_/" target="_blank">
              Instagram 
            </a>
          </li>
        </ul>
        <div className="btn-up" onClick={handleBackToTop}>
          <ArrowUpIcon className='arrow' />
          <span>
            retour en haut</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
