import './SliderSection.css';
import ScrollCarousel from 'scroll-carousel-react';
import icon1 from '../assets/images/icon1.jpg';
import icon2 from '../assets/images/icon2.jpg';
import icon3 from '../assets/images/icon3.jpg';
import icon4 from '../assets/images/icon4.jpg';
import icon5 from '../assets/images/icon5.jpg';
import icon6 from '../assets/images/icon6.jpg';
import icon7 from '../assets/images/icon7.jpg';
import icon8 from '../assets/images/icon8.jpg';
import icon9 from '../assets/images/icon9.jpeg';

const iconArray = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9];

const SliderSection: React.FC = () => {
  const itemArray = Array.from({ length: 10 }, (_, index) => index + 1);

  return (

      <div className="media-section">

        <ScrollCarousel >
          {itemArray.map((item) => (
            <div key={item} className='slide'>
              <img
              alt="slide-image"
                src={iconArray[item - 1]}
                className='slide-image'
              />
            </div>
          ))}
        </ScrollCarousel>
      </div>

  );
};

export default SliderSection;
