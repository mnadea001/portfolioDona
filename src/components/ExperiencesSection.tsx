import './ExperiencesSection.css';

import { useParallax } from "react-scroll-parallax";
import ExperienceComponent from './ExperienceComponent';

const experiencesData = [
  {
    imgSrc: 'https://images.unsplash.com/photo-1682686580003-22d3d65399a8?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Experience 1',
    description: 'Description of experience 1.',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  },
  {
    imgSrc: 'path-to-image-2.jpg',
    title: 'Experience 2',
    description: 'Description of experience 2.',
    skills: ['Skill 4', 'Skill 5', 'Skill 6'],
  },
  {
    imgSrc: 'path-to-image-3.jpg',
    title: 'Experience 3',
    description: 'Description of experience 3.',
    skills: ['Skill 7', 'Skill 8', 'Skill 9'],
  },
  // Add more experiences as needed
];
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
      <h1>EXPERIENCES</h1>
      <section className="bg-container">
        <div className="absolute-text">

        {experiencesData.map((experience, index) => (
            <div className="colored-circle img" key={index} ref={index === 0 ? parallaxEasingFirst.ref : index === 1 ? parallaxEasingSecond.ref : parallaxEasingThird.ref}>
              <ExperienceComponent
                imgSrc={experience.imgSrc}
                title={experience.title}
                description={experience.description}
                skills={experience.skills}
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};


export default ExperiencesSection;
