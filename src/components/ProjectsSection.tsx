import AccordionList from './AccordionList';
import './ProjectsSection.css';
import { Zoom } from "react-awesome-reveal";
import { useContext } from 'react';
import { DarkModeContext } from '../providers/DarkModeProvider';
import beers from '../assets/images/beers.png';
import elemate from '../assets/images/ELEMATE.png';

const projectsData = [
  { title: 'Run Up Asso', content: 'Projet Symfony en binome', imageSrc: '', description: 'Projet Symfony en binome', languages: ['Symfony'], number: 2 },
  { title: 'Séniorissime', content: 'Projet Symfony + API OpenWeather', imageSrc: '', languages: ['Symfony', 'API'], number: 3 },
  { title: 'Vinyl du Coin', content: 'Projet Symfony en autonomie', imageSrc: '', languages: ['Symfony'], number: 1 },
  { title: 'API Movie', content: 'Project Next.Js + API dbmovie', imageSrc: '', languages: ['Next.Js', 'API'], number: 4 },
  { title: 'Chinese Year', content: 'Project Java Spring en autonomie', imageSrc: '', languages: ['Java', 'Spring'], number: 2 },
  { title: 'TakeMe', content: 'Project React Native', imageSrc: '', languages: ['React Native'], number: 3 },
  { title: 'Beers Notation', content: 'Project React.JS', imageSrc: beers, languages: ['React'], number: 1 },
];

const ProjectsSection: React.FC = () => {
  const darkModeContext = useContext(DarkModeContext);
  const darkMode = darkModeContext?.darkMode || false;
  const textStyle: React.CSSProperties = {
    color: darkMode === true ? '#C996FF' : '#FFE7C2',

  };
  return (
    <>
      <section className="projets-section">
        {/* <SliderSection /> */}
        <section className="projets">
          <Zoom>
            <h1 style={textStyle}>PROJETS</h1>
          </Zoom>
          <p>Principaux projets</p>
          <AccordionList projects={projectsData} />
        </section>
      </section>
    </>
  );
};

export default ProjectsSection;
