
import './Footer.css';
import IconGithub from '../assets/icons/IconGithub';
import MailIcon from '../assets/icons/MailIcon';
import { useEffect } from 'react';
import { gsap } from "gsap";

const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    gsap.set(".ball", { xPercent: 0, yPercent: 0 });
    let targets = gsap.utils.toArray(".ball");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        // duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02
      });
    });
  }, []);


  return (
    <footer className="footer-container">
      <div className="ball"></div>
      <div className="ball"></div>
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
