
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
            <MailIcon />
            <a href="/about">
              Mail
            </a>
          </li>
          <li>      
            <IconGithub />
            <a href="/contact">
              Github
            </a>
          </li>
        </ul>
        <p onClick={handleBackToTop}>Back to top</p>
      </div>
      <br />
      <br />
      <br />
      <br />      <br />
      <br />      <br />
      <br />
    </footer>
  );
};

export default Footer;
