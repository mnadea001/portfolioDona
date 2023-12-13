import './ExperiencesSection.css';

import { useParallax } from "react-scroll-parallax";
import ExperienceComponent from './ExperienceComponent';

const ExperiencesSection: React.FC = () => {
  const parallaxEasing = useParallax({
    easing: [1, -0.75, 0.5, 1.34],
    translateX: [300, -200],
    translateY: [200, 0],
  });
  return (
    <div>
      <section className="bg-container">
        <div className="absolute-text">

          <div className="colored-circle first-circle" ref={parallaxEasing.ref}>
            <ExperienceComponent />
          </div>

        </div>
      </section>

    </div>
  );
};


export default ExperiencesSection;
