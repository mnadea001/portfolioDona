import './ExperiencesSection.css';

import { useParallax } from "react-scroll-parallax";
import ExperienceComponent from './ExperienceComponent';

const ExperiencesSection: React.FC = () => {
  const parallaxEasingFirst = useParallax({
    easing: "easeOutQuad",
    translateX: [300, -100],
    translateY: [0, 100],
  });
  const parallaxEasingSecond = useParallax({
    easing: "easeOutQuad",
    translateX: [300, -250],
    translateY: [150, 0],
  });
  const parallaxEasingThird = useParallax({
    // easing: [1, -0.75, 0.5, 1.34],
    easing: "easeInQuad",
    translateX: [300, -150],
    translateY: [100, 0],
    speed: -20
  });
  return (
    <div>
      <section className="bg-container">
        <div className="absolute-text">

          <div className="colored-circle img" ref={parallaxEasingFirst.ref}>
            <ExperienceComponent />
          </div>

          <div className="colored-circle img" ref={parallaxEasingSecond.ref}>
            <ExperienceComponent />
          </div>
          <div className="colored-circle img" ref={parallaxEasingThird.ref}>
            <ExperienceComponent />
          </div>
        </div>
      </section>

    </div>
  );
};


export default ExperiencesSection;
