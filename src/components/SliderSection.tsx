import './SliderSection.css';
import ScrollCarousel from 'scroll-carousel-react';
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';
import icon4 from '../assets/images/icon4.png';
import icon5 from '../assets/images/icon5.png';
import icon6 from '../assets/images/icon6.png';
import icon7 from '../assets/images/icon7.png';
import icon8 from '../assets/images/icon8.png';
import icon9 from '../assets/images/icon9.png';
import icon10 from '../assets/images/icon10.png';
import { Zoom } from "react-awesome-reveal";
import { useContext } from 'react';
import { DarkModeContext } from '../providers/DarkModeProvider';

const iconArray = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10];

const SliderSection: React.FC = () => {
  const itemArray = Array.from({ length: 10 }, (_, index) => index + 1);
  const darkModeContext = useContext(DarkModeContext);
  const darkMode = darkModeContext?.darkMode || false;
  const textStyle: React.CSSProperties = {
    color: darkMode === true ? '#C996FF' : '#FFE7C2',

  };
  const calistogaStyle: React.CSSProperties = {
    color: darkMode === true ? '#FFE7C2' : '#333333'
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <div className="slider-section">
        <Zoom>
          <h1 className={isMobile ? 'not-centered' : ''} style={textStyle}>Compétences</h1>
          <h3 className={isMobile ? 'not-centered' : ''} style={calistogaStyle}>langages maitrisés</h3>
        </Zoom>
        <ScrollCarousel >
          {itemArray.map((item) => (
            <div key={item} className='slide'>
              <img
                src={iconArray[item - 1]}
                alt='image illustrant compétences'
                className='slide-image'
              />
            </div>
          ))}
        </ScrollCarousel>
      </div>
    </>
  );
};

export default SliderSection;
