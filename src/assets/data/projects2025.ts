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
import balterno from '../images/balterno.jpeg';
import barri from '../images/barri.jpeg';
import aubergin from '../images/aubergin.jpg';
import idg from '../images/idg.jpeg';
import island_station from '../images/island_station.jpg';
import vizara from '../images/vizara.jpg';
import immmersif from '../images/immmersif.png';
import palermo from '../images/palermo.jpeg';
import pyrenees from '../images/PYRENEES.jpg';
import DUBAROUND from '../images/DUBAROUND.png';
import KULTURALMAQUIS from '../images/KULTURALMAQUIS.jpg';


interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projects2025: Project[] = [
          {
    title: 'KULTURAL MAQUIS',
    date: '8 Novembre 2025',
    lieu: 'Minerve, France',
    imageSrc: KULTURALMAQUIS
  },
        {
    title: 'Dubaround',
    date: '17 Octobre 2025',
    lieu: 'Brest, France',
    imageSrc: DUBAROUND
  },
      {
    title: 'Pyrénées Reggae Dub Fest',
    date: '10 - 11 Octobre 2025',
    lieu: 'Esbareich, France',
    imageSrc: pyrenees
  },
  {
    title: 'SubSide Festival',
    date: '5-7 septembre 2025',
    lieu: 'Ardèche, France',
    imageSrc: subside
  },
    {
    title: 'Palermo Dub Festival',
    date: '30 aout 2025',
    lieu: 'Palermo, Italie',
    imageSrc: palermo
  },
    {
    title: 'FEST.IMMERSIF',
    date: '5-7 septembre 2025',
    lieu: 'Blasimon, France',
    imageSrc: immmersif
  },
  {
    title: 'Cabaret Vert',
    date: '14-17 Aout 2025',
    lieu: 'Charleville-Mézières, France',
    imageSrc: cabaret25
  },   
          {
    title: 'Vizara Festival',
    date: '8 Aout 2025',
    lieu: 'Montignac Lascaux, France',
    imageSrc: vizara
  },  

      {
    title: 'Island Station',
    date: '25 juillet 2025',
    lieu: 'Belle-Ile-en-mer, France',
    imageSrc: island_station
  },  
    {
    title: 'International Dub Gathering',
    date: '20 juin 2025',
    lieu: 'Tarragona, Espagne',
    imageSrc: idg
  },  
  {
    title: 'Aubergin Dub',
    date: '14 juin 2025',
    lieu: 'Malakoff, France',
    imageSrc: aubergin
  },
      {
    title: 'Barri',
    date: '30 mai 2025',
    lieu: 'Montpellier, France',
    imageSrc: barri
  },
    {
    title: 'Balterno Caravan Dub Tour',
    date: '17 mai 2025',
    lieu: 'Bordeaux, France',
    imageSrc: balterno
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
