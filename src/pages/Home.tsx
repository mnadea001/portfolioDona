import './Home.css'

import DiplomaComponent from '../components/DiplomaComponent';
import RootsSection from '../components/RootsSection';
import ReggaeSection from '../components/ReggaeSection';
import DubSection from '../components/DubSection';
import AboutSection from '../components/AboutSection';
import DiskSection from '../components/DiskSection';
import IntroSection from '../components/IntroSection';
import DatesSection from '../components/DatesSection';


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
          <RootsSection />
          {/* <ProjectsSection />
          <ExperiencesMobile />
          <DiplomaMobileComponent /> */}
        </>
      ) : (
        <>
          {/* <TopSection /> */}
          <IntroSection />
          <RootsSection />
          <ReggaeSection />
          <DubSection />  
          <AboutSection /> 
          <DiplomaComponent />       
          <DatesSection />
          
          <DiskSection />
          {/* <ProjectsSection /> */}
          {/* <ExperiencesSection /> */}
        </>
      )}
    </div>
  );
};

export default Home;