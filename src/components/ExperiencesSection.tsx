import './ExperiencesSection.css';
import { useParallax } from "react-scroll-parallax";
import ExperienceComponent from './ExperienceComponent';
import thekub from '../assets/images/THEKUB.png';
import kub from '../assets/images/kub.png';
import kub2 from '../assets/images/kub2.png';
import kub3 from '../assets/images/kub3.png';
import kub4 from '../assets/images/kub4.png';
import elemate from '../assets/images/ELEMATE.png';
import elemate2 from '../assets/images/elemate2.png';
import elemate3 from '../assets/images/elemate3.png';
import elemate4 from '../assets/images/elemate4.png';
import worldcast from '../assets/images/WORLDCAST.png';
import wdc2 from '../assets/images/wdc2.png';
import wdc3 from '../assets/images/wdc3.png';

import { Zoom } from "react-awesome-reveal";
import { useContext } from 'react';
import { DarkModeContext } from '../providers/DarkModeProvider';

const experiencesData = [
  {
    imgSrc: thekub,
    images: [
      {
        label: 'Image 3',
        imgPath: kub2,
      },
      {
        label: 'Image 4',
        imgPath: kub3,
      },
      {
        label: 'Image 4',
        imgPath: kub4,
      }
    ],
    title: 'THE KUB',
    context: 'Agence de communication et évènementiel',
    position: 'Développeuse web',
    date: 'Janvier - Septembre 2022',
    description: 'Développement et maintenance de sites pour des clients',
    skills: ['SCSS', 'Javascript', 'WordPress', 'PrestaShop', 'PHP'],
    expImg: kub,
  },
  {
    imgSrc: elemate,
    images: [
      {
        label: 'Image 3',
        imgPath: elemate2,
      },
      {
        label: 'Image 4',
        imgPath: elemate3,
      },
      {
        label: 'Image 4',
        imgPath: elemate4,
      }
    ],
    title: 'ELEMATE',
    context: 'Start up - édition logiciel',
    position: 'Développeuse FulStack Symfony',
    date: 'Septembre 2022 - Septembre 2023',
    description: 'Développement de nouvelles fonctionnalités et refactorisation',
    skills: ['Symfony', 'API', 'Docker'],
    expImg: thekub,
  },
  {
    imgSrc: worldcast,
    images: [
      {
        label: 'Image 3',
        imgPath: wdc2,
      },
      {
        label: 'Image 4',
        imgPath: wdc3,
      },
    ],
    title: 'WORDLCAST',
    context: 'Logiciel de surveillance / Monitoring',
    position: 'Développeuse Javascript + Support client',
    date: 'Septembre 2023 - ',
    description: 'Développement de nouvelles fonctionnalités et support client',
    skills: ['Vue', 'Javascript', 'Node'],
    expImg: thekub,
  }
];
const ExperiencesSection: React.FC = () => {
  const darkModeContext = useContext(DarkModeContext);
  const darkMode = darkModeContext?.darkMode || false;
  const textStyle: React.CSSProperties = {
    color: darkMode === true ? '#C996FF' : '#FFE7C2',

};

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
  const calistogaStyle: React.CSSProperties = {
    color: darkMode === true ? '#FFE7C2' : '#333333',
  };
  return (
    <>
    <div>
      <Zoom>
        <h1 style={textStyle}>EXPERIENCES</h1>
      </Zoom>
      <h3 style={calistogaStyle} className="calistoga">en Développement</h3>
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
                expImg={experience.expImg}
                images={experience.images}
              />
            </div>
          ))}
        </div>
      </section>

    </div>
    </>
  );
};


export default ExperiencesSection;
