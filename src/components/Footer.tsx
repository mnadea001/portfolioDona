import './Footer.css';
import ArrowUpIcon from '../assets/icons/ArrowUpIcon';
import MailIcon from '../assets/icons/MailIcon';
import IconGithub from '../assets/icons/IconGithub';
import IconLinkedin from '../assets/icons/IconLinkedin';


const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className="footer-container">
      <div className="footer-content">
        <ul className="footer-links">
          <li>
            <a className="footer-link" href="mailto:mathilde.nadeau@hotmail.fr" target="_blank">
              MAIL <MailIcon className='mail' />
            </a>
          </li>
          <li>
            <a className="footer-link" href="https://www.linkedin.com/in/mathildenadeau" target="_blank">
              LINKEDIN <IconLinkedin className='lkd' />
            </a>
          </li>
          <li>
            <a className="footer-link" href="https://github.com/mnadea001" target="_blank">
              GITHUB <IconGithub className='github' />
            </a>
          </li>
        </ul>
        <div className="btn-up" onClick={handleBackToTop}>
          <ArrowUpIcon className='arrow' />
          <span>
            BACK TO TOP</span>
        </div>
      </div>
      <hr className="footer-hr" />
      <p>2024 - © Mathilde Nadeau</p>
    </footer>
  );
};

export default Footer;
