import './Footer.css';
import ArrowUpIcon from '../assets/icons/ArrowUpIcon';
import MailIcon from '../assets/icons/MailIcon';
import IconGithub from '../assets/icons/IconGithub';


const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className="footer-container">
      <div className="footer-content">
        <ul className="footer-links">
          <li>
          <a className="footer-link" href="/about">
              MAIL <MailIcon className='mail'/>
            </a>
          </li>
          <li>
            <a className="footer-link" href="/contact">
              GITHUB <IconGithub className='github'/>
            </a>
          </li>
        </ul>
        <div className="btn-up" onClick={handleBackToTop}>
        <ArrowUpIcon className='arrow' />
          <span>
        BACK TO TOP</span>
        </div>
 
      </div>
    </footer>
  );
};

export default Footer;
