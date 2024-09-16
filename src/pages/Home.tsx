import './Home.css'
import { useParallax } from "react-scroll-parallax";
import ProjectsSection from '../components/ProjectsSection';
import TopSection from '../components/TopSection';
import ExperiencesSection from '../components/ExperiencesSection';
import DiplomaComponent from '../components/DiplomaComponent';
import SliderSection from '../components/SliderSection';
import { DarkModeContext } from '../providers/DarkModeProvider';
import { useEffect, useState, useContext } from 'react';
import DiplomaMobileComponent from '../components/mobile/DiplomaMobileComponent';
import ExperiencesMobile from '../components/mobile/ExperiencesMobile';
import TopSectionMobile from '../components/mobile/TopSectionMobile';

const Home: React.FC = () => {
  const darkModeContext = useContext(DarkModeContext);
  const darkMode = darkModeContext?.darkMode || false;
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const parallax = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateY: [70, 100],
    rotate: [-150, 50]
  });

  return (
    <div>

<div className="bg-container mx-auto">
    {/* Image de la platine */}
    <div className="turntable" />
    
    {/* Vinyle qui tourne */}
    <div ref={parallax.ref} className={darkMode ? 'spinner spinner-style-dark' : 'spinner spinner-style'} />
  </div>


      {/* <div ref={parallax.ref} className={darkMode ? 'spinner spinner-style-dark' : 'spinner spinner-style'} /> */}
      {isMobile ? (
        <>
          <TopSectionMobile />
          <SliderSection />
          <ProjectsSection />
          <ExperiencesMobile />
          <DiplomaMobileComponent />
        </>
      ) : (
        <>
          <TopSection />
          <SliderSection />
          <ProjectsSection />
          <ExperiencesSection />
          <DiplomaComponent />
        </>
      )}
    </div>
  );
};

export default Home;