import React from 'react';
import './SliderSection.css';
import ScrollCarousel from 'scroll-carousel-react';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';
import icon7 from '../assets/icon7.png';
import icon8 from '../assets/icon8.png';
import icon9 from '../assets/icon9.png';
import icon10 from '../assets/icon10.png';

const iconArray = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10];

const SliderSection: React.FC = () => {
  const itemArray = Array.from({ length: 10 }, (_, index) => index + 1); // Array [1, 2, 3, ..., 11]

  return (
    <>
    <div className="slider-section">
      <h1>SKILLS</h1>
      <p>Mastered languages</p>
      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        smartSpeed='true'
        onReady={() => console.log('I am ready')}
      >
        {itemArray.map((item) => (
          <div key={item} className='slide'>
            <img
              src={iconArray[item - 1]}
              alt={`Icon ${item}`}
              className='icon-image'
            />
          </div>
        ))}
      </ScrollCarousel>
      </div>
    </>
  );
};

export default SliderSection;
