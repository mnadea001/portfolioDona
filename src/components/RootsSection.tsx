import './RootsSection.css';

import { Zoom } from "react-awesome-reveal";
import { useContext } from 'react';
import { DarkModeContext } from '../providers/DarkModeProvider';


const RootsSection: React.FC = () => {
  const darkModeContext = useContext(DarkModeContext);
  const darkMode = darkModeContext?.darkMode || false;
  const textStyle: React.CSSProperties = {
    color: darkMode === true ? '#C996FF' : '#FFE7C2',

  };


  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <div className="roots-section">
        <Zoom>
          <p className={isMobile ? 'not-centered title' : 'title-roots'} style={textStyle}>ROOTS</p>
        </Zoom>

      </div>
    </>
  );
};

export default RootsSection;
