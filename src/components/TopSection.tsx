import './TopSection.css'
import logo from '../assets/MN.png'
import { useParallax } from "react-scroll-parallax";

const TopSection: React.FC = () => {
  const parallaxEasing = useParallax({
    easing: "easeOutQuad",
    translateX: [-300, 100],
    translateY: [0, 100],
  });
  const parallaxEasingLeft = useParallax({
    easing: "easeOutQuad",
    translateX: [300, -100],
    translateY: [0, 100],
  });
  const parallaxEasingTop = useParallax({
    easing: "easeOutQuad",
    translateY: [30, 100],
  });
  const parallax = useParallax<HTMLDivElement>({
    easing: "ease",
    translateX: [-300, 100],
    translateY: [300, 100],
    rotate: [0, 360],
    speed: -20
  });
  return (
    <div>
      <div ref={parallax.ref} className="spinner spinner-style" data-text="SCROLL DOWN" />
      <section className="bg-container">
        <div className="absolute-text">
          <img ref={parallaxEasingTop.ref} id="homeImg" src={logo} />
          <div className="colored-circle first-circle" ref={parallaxEasing.ref} data-text="CREATIVE DEVELOPER" />
          <div className="colored-circle second-circle" ref={parallaxEasingLeft.ref} data-text="DIGITAL CREATOR" />
        </div>
      </section>
    </div>
  );
};


export default TopSection;