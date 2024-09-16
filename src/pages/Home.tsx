import './Home.css'
import { useParallax } from "react-scroll-parallax";
// import ProjectsSection from '../components/ProjectsSection';
// import TopSection from '../components/TopSection';
// import ExperiencesSection from '../components/ExperiencesSection';
import DiplomaComponent from '../components/DiplomaComponent';
import RootsSection from '../components/RootsSection';
import ReggaeSection from '../components/ReggaeSection';
import DubSection from '../components/DubSection';
import AboutSection from '../components/AboutSection';


import { DarkModeContext } from '../providers/DarkModeProvider';
import { useEffect, useState, useContext } from 'react';
// import DiplomaMobileComponent from '../components/mobile/DiplomaMobileComponent';
// import ExperiencesMobile from '../components/mobile/ExperiencesMobile';
// import TopSectionMobile from '../components/mobile/TopSectionMobile';

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
    // translateY: [-30, 90],
    rotate: [-150, 50]
  });

  return (
    <div>

<div className="bg-container">
    {/* Image de la platine */}
    <div className={darkMode ? 'turntable-dark' : 'turntable'} />
    
    {/* Vinyle qui tourne */}
    <div ref={parallax.ref} className={darkMode ? 'spinner spinner-style-dark' : 'spinner spinner-style'} />
  </div>


      {/* <div ref={parallax.ref} className={darkMode ? 'spinner spinner-style-dark' : 'spinner spinner-style'} /> */}
      {isMobile ? (
        <>
          {/* <TopSectionMobile /> */}
          <RootsSection />
          {/* <ProjectsSection />
          <ExperiencesMobile />
          <DiplomaMobileComponent /> */}
        </>
      ) : (
        <>
          {/* <TopSection /> */}
          <RootsSection />
          <ReggaeSection />
          <DubSection />
          <AboutSection />
          {/* <ProjectsSection /> */}
          {/* <ExperiencesSection /> */}
          <DiplomaComponent />
        </>
      )}
    </div>
  );
};

export default Home;