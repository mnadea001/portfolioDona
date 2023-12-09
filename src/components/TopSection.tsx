import './TopSection.css'
import '../assets/MN.png'
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
    rotate: [0, 360],
    translateY: [30, 100],
  });
  return (
    <div>
      <section className="bg-container">
        <div className="absolute-text">
          <img ref={parallaxEasingTop.ref} id="homeImg" src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

          <div className="colored-circle first-circle" ref={parallaxEasing.ref} />

          <div className="colored-circle second-circle" ref={parallaxEasingLeft.ref} />
        </div>
      </section>
      <div ref={parallax.ref} className="spinner">
        SCROLL DOWN
 
      </div>
      <br />

      <br />
      <br />
      <br />
      <br />      <br />
      <br />      <br />
      <br />      <br />
      <br />
      <br />
      <br />
      <br />      <br />

 
      <br />      <br />
      <br />
    </div>
  );
};


export default TopSection;