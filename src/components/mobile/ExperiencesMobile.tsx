// import ExperienceComponent from './ExperienceComponent';
// import thekub from '../assets/images/THEKUB.png';
// import kub from '../assets/images/kub.png';
// import kub2 from '../assets/images/kub2.png';
// import kub3 from '../assets/images/kub3.png';
// import kub4 from '../assets/images/kub4.png';
// import elemate from '../assets/images/ELEMATE.png';
// import elemate2 from '../assets/images/elemate2.png';
// import elemate3 from '../assets/images/elemate3.png';
// import elemate4 from '../assets/images/elemate4.png';
// import worldcast from '../assets/images/WORLDCAST.png';
// import wdc2 from '../assets/images/wdc2.png';
// import wdc3 from '../assets/images/wdc3.png';
import './ExperiencesMobile.css';
import { Zoom } from "react-awesome-reveal";
import { useContext} from 'react';
import { DarkModeContext } from '../../providers/DarkModeProvider';

// const experiencesData = [
//   {
//     imgSrc: thekub,
//     images: [
//       {
//         imgPath: kub2,
//       },
//       {
//         imgPath: kub3,
//       },
//       {
//         imgPath: kub4,
//       }
//     ],
//     title: 'THE KUB',
//     context: 'Agence de communication et évènementiel',
//     position: 'Développeuse web',
//     date: 'Janvier - Septembre 2022',
//     description: 'Développement et maintenance de sites pour des clients',
//     skills: ['SCSS', 'Javascript', 'WordPress', 'PrestaShop', 'PHP', 'AWS', 'Filezila'],
//     expImg: kub,
//   },
//   {
//     imgSrc: elemate,
//     images: [
//       {
//         imgPath: elemate2,
//       },
//       {
//         imgPath: elemate3,
//       },
//       {
//         imgPath: elemate4,
//       }
//     ],
//     title: 'ELEMATE',
//     context: 'Start up - édition logiciel',
//     position: 'Développeuse FulStack Symfony',
//     date: 'Septembre 2022 - Septembre 2023',
//     description: 'Développement de nouvelles fonctionnalités et refactorisation',
//     skills: ['Symfony', 'API', 'Docker', 'Tests', 'Git'],
//     expImg: thekub,
//   },
//   {
//     imgSrc: worldcast,
//     images: [
//       {
//         imgPath: wdc2,
//       },
//       {
//         imgPath: wdc3,
//       },
//     ],
//     title: 'WORLDCAST',
//     context: 'Logiciel de surveillance / Monitoring',
//     position: 'Développeuse Javascript + Support client',
//     date: 'Septembre 2023 - actuellement',
//     description: 'Développement de nouvelles fonctionnalités et support client',
//     skills: ['Vue', 'Javascript', 'Node', 'Git'],
//     expImg: thekub,
//   }
// ];

const ExperiencesMobile: React.FC = () => {
  const darkModeContext = useContext(DarkModeContext);
  const darkMode = darkModeContext?.darkMode || false;
  const textStyle: React.CSSProperties = {
    color: darkMode === true ? '#C996FF' : '#FFE7C2',

  };


  const calistogaStyle: React.CSSProperties = {
    color: darkMode === true ? '#FFE7C2' : '#333333',
  };
  return (
    <>
    <div className="experiences-section">
        <Zoom>
          <h1 style={textStyle}>EXPERIENCES</h1>
          <h3 style={calistogaStyle}>en développement</h3>

        </Zoom>
        <section className="bg-content">
          <div className="experience-container">
            <p>Test</p>
            <p>Test</p>

            <p>Test</p>

            <p>Test</p>

            {/* {experiencesData.map((experience, index) => (
              <div className="colored-circle img" key={index} >
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
            ))} */}
          </div>
        </section>
      </div>
    </>
  );
};


export default ExperiencesMobile;