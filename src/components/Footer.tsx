import './Footer.css';
import ArrowUpIcon from '../assets/icons/ArrowUpIcon';
import MailIcon from '../assets/icons/MailIcon';
import IconGithub from '../assets/icons/IconGithub';
import IconLinkedin from '../assets/icons/IconLinkedin';
// import gsap from "gsap";
// import { useEffect } from 'react';

const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // useEffect(() => {
  //   gsap.set(".ball", { xPercent: 0, yPercent: 0 });
  //   let targets = gsap.utils.toArray(".ball");
  //   window.addEventListener("mousemove", (e) => {
  //     gsap.to(targets, {
  //       // duration: 0.5,
  //       x: e.clientX,
  //       y: e.clientY,
  //       ease: "power1.out",
  //       overwrite: "auto",
  //       stagger: 0.02
  //     });
  //   });
  // }, []);
  return (
    <footer className="footer-container">
      {/* <div className="ball"></div>
      <div className="ball"></div> */}
      <div className="footer-content">
        <ul className="footer-links">
          <li>
            <a className="footer-link" href="mailto:mathilde.nadeau@hotmail.fr" target="_blank">
              MAIL <MailIcon className='mail' />
            </a>
          </li>
          <li>
            <a className="footer-link" href="https://www.linkedin.com/in/mathildenadeau" target="_blank">
              Facebook <IconLinkedin className='lkd' />
            </a>
          </li>
          <li>
            <a className="footer-link" href="https://github.com/mnadea001" target="_blank">
              Instagram <IconGithub className='github' />
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
      <p className="footer-text">2024 - © Mathilde Nadeau</p>
    </footer>
  );
};

export default Footer;
