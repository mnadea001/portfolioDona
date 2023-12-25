
import './Footer.css';
import IconGithub from '../assets/icons/IconGithub';
import MailIcon from '../assets/icons/MailIcon';

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

    </footer>
  );
};

export default Footer;
