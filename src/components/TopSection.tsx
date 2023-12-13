import './TopSection.css'
import logo from '../assets/MN.png'
import vector from '../assets/Vector.png'
import { useParallax } from "react-scroll-parallax";
import ProjectsSection from './ProjectsSection';
import ExperiencesSection from './ExperiencesSection';

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
          <img ref={parallaxEasingTop.ref} id="homeImg" src={logo} />

          <div className="colored-circle first-circle" ref={parallaxEasing.ref} />

          <div className="colored-circle second-circle" ref={parallaxEasingLeft.ref} />
        </div>
      </section>
      <div ref={parallax.ref} className="spinner" />
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
      <ProjectsSection /> 
      <ExperiencesSection/>
    </div>
  );
};


export default TopSection;