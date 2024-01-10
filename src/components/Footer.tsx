
import './Footer.css';
import { useEffect } from 'react';
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ArrowUpIcon from '../assets/icons/ArrowUpIcon';
import MailIcon from '../assets/icons/MailIcon';
import IconGithub from '../assets/icons/IconGithub';

gsap.registerPlugin(MotionPathPlugin);
const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  gsap.to("#rect", {
    duration: 5,
    repeat: 100,
    yoyo: true,
    ease: "power1.inOut",
    motionPath: {
      path: "#path",
      align: "#path",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  });


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
      <svg width="100%" height="100%" viewBox="-20 0 557 190" id="svg">
        <circle cx="100" cy="100" r="3" />
        <circle cx="300" cy="20" r="3" />
        <path id="path" d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37" />
        <g id="rect">
          <rect width="85" height="30" fill="#1501FF" />
          <text x="0" y="19" font-size="14">What's next ?</text>
        </g>
      </svg>
      <div className="footer-content">
        <ul className="footer-links">
          <li>
            <a className="footer-link footer-link1" href="/about">
              MAIL <MailIcon className='mail'/>
            </a>
          </li>
          <li>
            <a className="footer-link footer-link2" href="/contact">
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
