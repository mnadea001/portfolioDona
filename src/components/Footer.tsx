import './Footer.css';
import '../assets/MailIcon.tsx'
import MailIcon from '../assets/MailIcon';
import IconGithub from '../assets/IconGithub';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <ul className="footer-links">
          <li>CONTACT</li>
          <li><a href="/about">
            <MailIcon />
            Mail</a></li>
          <li><a href="/contact">
            <IconGithub/>
            Github</a></li>
        </ul>
        <p>Back to top</p>
      </div>
    </footer>
  );
};

export default Footer;
