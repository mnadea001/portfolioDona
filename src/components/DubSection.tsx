import './DubSection.css';

import { Zoom } from "react-awesome-reveal";

const DubSection: React.FC = () => {


  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <div className="dub-section">
        <Zoom>
          <p className={isMobile ? 'not-centered dub-title' : 'dub-title'} >DUB</p>
        </Zoom>

      </div>
    </>
  );
};

export default DubSection
;
