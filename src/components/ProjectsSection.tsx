import AccordionList from './AccordionList';
import './ProjectsSection.css';
import { Zoom } from "react-awesome-reveal";
import { useContext } from 'react';
import { DarkModeContext } from '../providers/DarkModeProvider';
import beers from '../assets/images/beers.png';
import senio from '../assets/images/senio.png';
import runup from '../assets/images/runup.png';
import takeme from '../assets/images/takeme.png';
import chinesejava from '../assets/images/chinesejava.webp';
import vdc from '../assets/images/vdc.png';

const projectsData = [
  { title: 'Run Up Asso', content: 'Projet Symfony en binome', imageSrc: runup, description: 'Fonctionnalités: inscription/ connexion, CRUD profil associations, commentaires, favoris', languages: ['Symfony'], number: 2 },
  { title: 'Séniorissime', content: 'Projet Symfony + API OpenWeather', imageSrc: senio, description: 'Affichage des activités en fonction de la météo d\'une ville', languages: ['Symfony', 'API', 'OpenWeather', 'Heroku'], number: 3 },
  { title: 'Vinyl du Coin', content: 'Projet Symfony en autonomie', description: 'Fonctionnalités: inscription/ connexion, CRUD profil associations, commentaires, favoris, messagerie, filtres, pagination, barre de recherche, panel administrateur', imageSrc: vdc, languages: ['Symfony'], number: 1 },
  { title: 'Chinese Year', content: 'Project Java Spring en autonomie', description: 'Fonctionnalités: affichage de proverbes aléatoires, définition du signe chinois en fonction de l\'age, réduction en fonction du prix du panier, liste des articles, panier d\'achat', imageSrc: chinesejava, languages: ['Java Spring', 'ThymeLeaf'], number: 2 },
  { title: 'TakeMe', content: 'Project React Native', description: 'Affichage carte, détail annonce, formulaire de création d\'annonce', imageSrc: takeme, languages: ['React Native', 'Leaflet'], number: 3 },
  { title: 'Beers Notation', content: 'Project React.JS', description: 'Fonctionnalités: inscription/ connexion, Liste / détail bière, commentaires, notation', imageSrc: beers, languages: ['React', 'FireBase', 'API', 'Vercel'], number: 1 },
];

const ProjectsSection: React.FC = () => {
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
      <section className="projets-section">
        <section className="projets">
          <Zoom>
            <h1 style={textStyle}>PROJETS</h1>
          </Zoom>
          <h3 style={calistogaStyle} className="calistoga">Principaux projets</h3>
          <AccordionList projects={projectsData} />
        </section>
      </section>
    </>
  );
};

export default ProjectsSection;
