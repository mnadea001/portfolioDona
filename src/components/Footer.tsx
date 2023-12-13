
import './Footer.css';
import '../assets/MailIcon.tsx';
import MailIcon from '../assets/MailIcon';
import IconGithub from '../assets/IconGithub';

const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <ul className="footer-links">
          <li>CONTACT</li>
          <li>
            <a href="/about">
              <MailIcon />
              Mail
            </a>
          </li>
          <li>
            <a href="/contact">
              <IconGithub />
              Github
            </a>
          </li>
        </ul>
        <p onClick={handleBackToTop}>Back to top</p>
      </div>
    </footer>
  );
};

export default Footer;
