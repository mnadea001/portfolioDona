import './ReggaeSection.css';

import { Zoom } from "react-awesome-reveal";

const ReggaeSection: React.FC = () => {


  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <div className="slider-section">
        <Zoom>
          <p className={isMobile ? 'not-centered title' : 'title'} >REGGAE</p>
        </Zoom>

      </div>
    </>
  );
};

export default ReggaeSection;
