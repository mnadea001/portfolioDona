// import './DubSection.css';
import { useParallax } from "react-scroll-parallax";

import { useContext } from 'react';

import { DarkModeContext } from '../providers/DarkModeProvider';

const DiskSection: React.FC = () => {

  const darkModeContext = useContext(DarkModeContext);
  const darkMode = darkModeContext?.darkMode || false;



  const parallax = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    // translateY: [-30, 90],
    rotate: [-150, 50]
  });

  return (
    <>
<div className="bg-container">
    {/* Image de la platine */}
    <div className={darkMode ? 'turntable-dark' : 'turntable'} />
    
    {/* Vinyle qui tourne */}
    <div ref={parallax.ref} className={darkMode ? 'spinner spinner-style-dark' : 'spinner spinner-style'} />
  </div>

    </>
  );
};

export default DiskSection
;
