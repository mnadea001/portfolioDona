import AccordionList from './AccordionList';
import './ProjectsSection.css';
import { Zoom } from "react-awesome-reveal";
import { useContext } from 'react';
import { DarkModeContext } from '../providers/DarkModeProvider';
import beers from '../assets/images/beers.png';
import beers2 from '../assets/images/beers2.png';
import beers3 from '../assets/images/beers3.png';
import beers4 from '../assets/images/beers4.png'
import beers5 from '../assets/images/beers5.png';
import senio from '../assets/images/senio.png';
import senio2 from '../assets/images/senio2.png';
import runup from '../assets/images/runup.png';
import runup2 from '../assets/images/runup2.png';
import runup3 from '../assets/images/runup3.png';
import takeme from '../assets/images/takeme.png';
import takeme2 from '../assets/images/takeme2.png';
import chinesejava from '../assets/images/chinesejava.webp';
import chineseproject2 from '../assets/images/chineseproject2.webp';
import vdc from '../assets/images/vdc.png';
import vdc1 from '../assets/images/vdc1.png';
import vdc3 from '../assets/images/vdc3.png';
import vdc4 from '../assets/images/vdc4.png';
import icon4 from '../assets/images/icon4.png';
import icon7 from '../assets/images/icon7.png';
import icon8 from '../assets/images/icon8.png';


const projectsData = [
  {
    title: 'Run Up Asso',
    content: 'Projet Symfony en binome',
    description: 'Fonctionnalités: inscription/ connexion, CRUD profil associations, commentaires, favoris',
    languages: ['Symfony', 'SQL'],
    number: 2,
    imageSrc: icon8,
    images: [
      {
        imgPath: runup,
      },
      {
        imgPath: runup2,
      },
      {
        imgPath: runup3,
      }
    ],
  },
  {
    title: 'Séniorissime',
    content: 'Projet Symfony + API OpenWeather',
    description: 'Affichage des activités en fonction de la météo d\'une ville',
    languages: ['Symfony', 'API', 'OpenWeather', 'Heroku', 'Adobe XD', 'SQL'],
    number: 3,
    imageSrc: icon8,
    images: [
      {
        imgPath: senio,
      },
      {
        imgPath: senio2,
      },
    ],
  },
  {
    title: 'Vinyl du Coin',
    content: 'Projet Symfony en autonomie',
    description: 'Fonctionnalités: inscription/ connexion, CRUD profil associations, commentaires, favoris, messagerie, filtres, pagination, barre de recherche, panel administrateur',
    languages: ['Symfony', 'SQL'],
    number: 1,
    imageSrc: icon8,
    images: [
      {
        imgPath: vdc,
      },
      {
        imgPath: vdc1,
      },      
      {
        imgPath: vdc3,
      },
      {
        imgPath: vdc4,
      }
    ],
  },
  {
    title: 'Chinese Year',
    content: 'Project Java Spring en autonomie',
    description: 'Fonctionnalités: affichage de proverbes aléatoires, définition du signe chinois en fonction de l\'age, réduction en fonction du prix du panier, liste des articles, panier d\'achat',
    languages: ['Java Spring', 'ThymeLeaf', 'SQL'],
    number: 1,
    imageSrc: icon4,
    images: [
      {
        label: 'Image 3',
        imgPath: chinesejava,
      },
      {
        label: 'Image 4',
        imgPath: chineseproject2,
      },
    ],
  },
  {
    title: 'TakeMe',
    content: 'Project React Native',
    description: 'Affichage carte, détail annonce, formulaire de création d\'annonce',
    languages: ['React Native', 'Leaflet'],
    number: 3,
    imageSrc: icon7,
    images: [
      {
        label: 'Image 3',
        imgPath: takeme,
      },
      {
        label: 'Image 4',
        imgPath: takeme2,
      },
    ],
  },
  {
    title: 'Beers Notation',
    content: 'Project React.JS',
    description: 'Fonctionnalités: inscription/ connexion, Liste / détail bière, commentaires, notation, déploiement sur Vercel',
    languages: ['React', 'FireBase', 'API', 'Vercel'],
    number: 1,
    imageSrc: icon7,
    images: [
      {
        label: 'Image 3',
        imgPath: beers,
      },
      {
        label: 'Image 4',
        imgPath: beers2,
      },
      {
        label: 'Image 3',
        imgPath: beers3,
      },
      {
        label: 'Image 4',
        imgPath: beers4,
      },
      {
        label: 'Image 4',
        imgPath: beers5,
      }
    ],
  }
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
            <h3 style={calistogaStyle}>principaux projets</h3>
          </Zoom>
          <AccordionList projects={projectsData} />
        </section>
      </section>
    </>
  );
};

export default ProjectsSection;
