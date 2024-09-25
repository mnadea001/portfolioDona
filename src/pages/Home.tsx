import './Home.css'

import AboutSection from '../components/AboutSection';
import DiskSection from '../components/DiskSection';
import IntroSection from '../components/IntroSection';
import DatesSection from '../components/DatesSection';
import SliderSection from '../components/SliderSection';


import { useEffect, useState } from 'react';


const Home: React.FC = () => {

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



  return (
    <div>



      {isMobile ? (
        <>
          {/* <TopSectionMobile /> */}

          {/* <ProjectsSection />
          <ExperiencesMobile />
          <DiplomaMobileComponent /> */}
        </>
      ) : (
        <>
          {/* <TopSection /> */}
          <IntroSection />

          <AboutSection />   
          <DatesSection />
          <SliderSection />

          <DiskSection />
          {/* <ProjectsSection /> */}
          {/* <ExperiencesSection /> */}
        </>
      )}
    </div>
  );
};

export default Home;