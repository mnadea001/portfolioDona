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
    easing: "ease",
    translateX: isMobile ? [-50, 50] : [-300, 100],
    translateY: isMobile ? [150, 50] : [300, 100],
    rotate: [0, 360],
    speed: -20
  });

  return (
    <div>
      <div ref={parallax.ref} className={darkMode ? 'spinner spinner-style-dark' : 'spinner spinner-style'} data-text="SCROLL DOWN" />
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