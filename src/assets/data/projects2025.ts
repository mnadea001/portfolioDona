import bilbaobrutality from '../images/bilbao-brutality.png';
import winterdubcamp from '../images/winterdubcamp.jpg';
import lyonfev from '../images/lyonfev.jpg';
import dafvalencia from '../images/dafvalencia.png';
import pinata from '../images/PINATA.jpg';
import dubarena from '../images/dubarena.jpg';
import hfd from '../images/HFD.jpg';
import sekaseka from '../images/SEKA.jpg';
import dubquake from '../images/dubquake.jpg';
import cafe_pompier from '../images/cafe_pompier.jpg';
import subside from '../images/subside.jpg';
import cabaret25 from '../images/cabaret25.png';

interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projects2025: Project[] = [
  {
    title: 'SubSide Festival',
    date: '5-7 septembre 2025',
    lieu: 'Ardèche, Suisse',
    imageSrc: subside
  },
  {
    title: 'Cabaret Vert',
    date: '14-17 Aout 2025',
    lieu: 'Charleville-Mézières, France',
    imageSrc: cabaret25
  },
  {
    title: 'DUBQUAKE',
    date: '26 avril 2025',
    lieu: 'Genève, Suisse',
    imageSrc: dubquake
  },
  {
    title: 'DUB AREA',
    date: '5 avril 2025',
    lieu: 'Portet sur Garonne, France',
    imageSrc: dubarena
  },
  {
    title: 'CAFE POMPIER',
    date: '21 mars 2025',
    lieu: 'Bordeaux, France',
    imageSrc: cafe_pompier
  },
  {
    title: 'DAF',
    date: '7-9 mars 2025',
    lieu: 'Valence, Espagne',
    imageSrc: dafvalencia
  },
  {
    title: 'SUB SESSION',
    date: '1 mars 2025',
    lieu: 'La Boiserie de Mazan, France',
    imageSrc: hfd
  },
  {
    title: 'SEKA SEKA',
    date: '19 février 2025',
    lieu: 'Montpellier, France',
    imageSrc: sekaseka
  },
  {
    title: 'PINATA RADIO',
    date: '19 février 2025',
    lieu: 'Montpellier, France',
    imageSrc: pinata
  },
  {
    title: 'WINTER DUB WINTER',
    date: '7 février 2025',
    lieu: 'Nantes, France',
    imageSrc: winterdubcamp
  },
  {
    title: 'DUB',
    date: '6 février 2025',
    lieu: 'Lyon, France',
    imageSrc: lyonfev
  },
  {
    title: 'DUB SHELTER',
    date: '25 Janvier 2025',
    lieu: 'Bilbao, Espagne',
    imageSrc: bilbaobrutality
  }
];

export default projects2025;
