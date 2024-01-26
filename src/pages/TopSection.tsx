import './TopSection.css'
import logo from '../assets/images/MN.png'
import { useParallax } from "react-scroll-parallax";
import ProjectsSection from '../components/ProjectsSection';
import ExperiencesSection from '../components/ExperiencesSection';
import DiplomaComponent from '../components/DiplomaComponent';
import SliderSection from '../components/SliderSection';
import { DarkModeContext } from '../providers/DarkModeProvider';
import { useEffect, useState, useContext } from 'react';

const TopSection: React.FC = () => {
  const darkModeContext = useContext(DarkModeContext);
  const darkMode = darkModeContext?.darkMode || false;

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Check if the screen width is below a certain threshold for mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Use parallax settings based on screen size
  const parallaxEasing = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateX: isMobile ? [-300, -100] : [-300, 110],
    translateY: isMobile ? [0, 50] : [0, 100],
  });

  const parallaxEasingLeft = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateX: isMobile ? [-100, -300] : [300, -110],
    translateY: isMobile ? [0, 50] : [0, 100],
  });

  const parallaxEasingTop = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateX: isMobile ? [-200, -200] : '',
    translateY: isMobile ? [10, 70] : [30, 100],
  });

  const parallax = useParallax<HTMLDivElement>({
    easing: "ease",
    translateX: isMobile ? [-50, 50] : [-300, 100],
    translateY: isMobile ? [150, 50] : [300, 100],
    rotate: [0, 360],
    speed: -20
  });


  return (

      <div>
        <div ref={parallax.ref} className={darkMode ? 'spinner spinner-style-dark' : 'spinner spinner-style'} data-text="SCROLL DOWN" />
        
        <section className="bg-container">
          <div className="absolute-text">
            <img ref={parallaxEasingTop.ref} id="homeImg" src={logo} />
            <div className="colored-circle first-circle" ref={parallaxEasing.ref} data-text="CREATIVE DEVELOPER" />
            <div className="colored-circle second-circle" ref={parallaxEasingLeft.ref} data-text="DIGITAL CREATOR" />
          </div>
        </section>

        <SliderSection />
        <ProjectsSection />
        <ExperiencesSection />
        <DiplomaComponent />
      </div>

  );
};


export default TopSection;