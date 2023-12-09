import './TopSection.css'
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
  return (
    <div>
      <section className="bg-container">
        <div className="absolute-text">
        <div className="colored-circle first-circle" ref={parallaxEasing.ref} />
        <div className="colored-circle second-circle" ref={parallaxEasingLeft.ref} />
        </div>
      </section>
      <br />

      <br />
      <br />
      <br />
      <br />      <br />
      <br />      <br />
      <br />      <br />
      <br />      <br />
      <br />      <br />
      <br />      <br />
      <br />      <br />
      <br />      <br />
      <br />
    </div>
  );
};


  export default TopSection;