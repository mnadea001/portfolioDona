import './TopSection.css'
import { useEffect } from 'react';

const TopSection: React.FC = () => {
  useEffect(() => {
    const homeImg = document.getElementById('homeImg');
    const firstCircle = document.getElementById('firstCircle');
    const secondCircle = document.getElementById('secondCircle');

    const firstCircleText = document.createElement('div');
    const secondCircleText = document.createElement('div');
    firstCircleText.className = 'circle-text';
    secondCircleText.className = 'circle-text';
    firstCircle.appendChild(firstCircleText);
    secondCircle.appendChild(secondCircleText);

    const handleScroll = () => {
      let value = window.scrollY;
      let threshold = 300;

      let windowHeight = window.innerHeight;
      let windowCenter = windowHeight / 2;

      if (value < threshold) {
        firstCircle.style.marginLeft = value * 0.75 + 'px';
        firstCircle.style.marginTop = value * 1.25 + 'px';
        secondCircle.style.marginLeft = value * -0.75 + 'px';
        secondCircle.style.marginTop = value * 1.25 + 'px';
        homeImg.style.marginTop = value * 1.25 + 'px';

        firstCircleText.style.display = 'none';
        secondCircleText.style.display = 'none';
      } else {
        firstCircle.style.marginLeft = threshold * 0.75 + 'px';
        firstCircle.style.marginTop = threshold * 1.75 + 'px';
        secondCircle.style.marginLeft = -threshold * 0.75 + 'px';
        secondCircle.style.marginTop = threshold * 1.75 + 'px';
        homeImg.style.marginTop = threshold * 1.75 + 'px';

        firstCircleText.style.display = 'block';
        secondCircleText.style.display = 'block';
        firstCircleText.style.marginLeft = 50 + 'px';

        firstCircleText.textContent = 'Solution\nOriented';
        secondCircleText.textContent = 'Digital\nCreator';

        firstCircleText.classList.add('custom-font1');
        secondCircleText.classList.add('custom-font2');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={divImg}>
      <div id="firstCircle" className={firstCircle}></div>
      <img className={homeImg} id="homeImg" src="./assets/MN.png" alt="Mathilde Nadeau" />
      <div className={secondCircle} id="secondCircle"></div>
    </div>
  );
};


const divImg: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100vh',
  width: '100%',
  marginTop: '75px',
  paddingBottom: '250px',
  marginBottom: '250px',
  position: 'relative',
  overflow: 'hidden',
};

const secondCircle: React.CSSProperties = {
  borderRadius: '50%',
  height: '300px',
  width: '300px',
  backgroundColor: '#D5FF3C',
  position: 'absolute',
  top: '20',
  left: '40%',
  // object-fit: cover;
};

const firstCircle: React.CSSProperties = {
  borderRadius: '50%',
  height: '300px',
  width: '300px',
  backgroundColor: '#1501FF',
  position: 'absolute',
  top: '20',
  left: '40%',
  // object-fit: cover,
};
const homeImg: React.CSSProperties = {
  borderRadius: '50%',
  height: '300px',
  width: '300px',
  position: 'absolute',
  top: '20',
  left: '40%',
  // objectFit: 'cover',
  // z-index: 999,s
};
  
  export default TopSection;