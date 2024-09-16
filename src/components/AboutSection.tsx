import './AboutSection.css';

import { Zoom } from "react-awesome-reveal";
import { useContext } from 'react';
import { DarkModeContext } from '../providers/DarkModeProvider';


const AboutSection: React.FC = () => {
  const darkModeContext = useContext(DarkModeContext);
  const darkMode = darkModeContext?.darkMode || false;
  const textStyle: React.CSSProperties = {
    color: darkMode === true ? '#C996FF' : '#FFE7C2',

  };


  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <div className="about-section">
        <Zoom>
          <p className={isMobile ? 'not-centered title-about' : 'title-about'} style={textStyle}>About</p>
        </Zoom>

      </div>
    </>
  );
};

export default AboutSection;
