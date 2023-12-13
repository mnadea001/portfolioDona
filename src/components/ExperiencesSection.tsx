import './ExperiencesSection.css';
import { useParallax } from "react-scroll-parallax";
import ExperienceComponent from './ExperienceComponent';
import thekub from '../assets/THEKUB.png';
import elemate from '../assets/ELEMATE.png';
import worldcast from '../assets/WORLDCAST.png';

const experiencesData = [
  {
    imgSrc: thekub,
    title: 'THE KUB',
    context: 'Agence de communication et évènementiel',
    position:'Développeuse web',
    date: 'Janvier - Septembre 2022',
    description: 'Développement et maintenance de sites pour des clients',
    skills: ['SCSS', 'Javascript', 'WordPress', 'PrestaShop', 'PHP'],
  },
  {
    imgSrc: elemate,
    title: 'ELEMATE',
    context: 'Start up - édition logiciel',
    position:'Développeuse FulStack Symfony',
    date: 'Septembre 2022 - Septembre 2023',
    description: 'Développement de nouvelles fonctionnalités et refactorisation',
    skills: ['Symfony', 'API', 'Docker'],
  },
  {
    imgSrc: worldcast,
    title: 'WORDLCAST',
    context: 'Logiciel de surveillance / Monitoring',
    position:'Développeuse Javascript + Support client',
    date: 'Septembre 2023 - ',
    description: 'Développement de nouvelles fonctionnalités et support client',
    skills: ['Vue', 'Javascript', 'Node'],
  }
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
                context={experience.context}
                position={experience.position}
                date={experience.date}
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};


export default ExperiencesSection;
