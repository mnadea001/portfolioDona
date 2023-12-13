import './ExperiencesSection.css';

import { useParallax } from "react-scroll-parallax";
import ExperienceComponent from './ExperienceComponent';

const ExperiencesSection: React.FC = () => {
  const parallaxEasingFirst = useParallax({
    easing: [1, -0.75, 0.5, 1.34],
    translateX: [300, -200],
    translateY: [200, 0],
  });
  const parallaxEasingSecond = useParallax({
    easing: [1, -0.75, 0.5, 1.34],
    translateX: [300, -250],
    translateY: [150, 0],
  });
  const parallaxEasingThird = useParallax({
    easing: [1, -0.75, 0.5, 1.34],
    translateX: [300, -150],
    translateY: [100, 0],
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
