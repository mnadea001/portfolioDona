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
import united_rockers from '../images/united_rockers.jpg';
import Ghent from '../images/ghent.jpg';
import tortuga from '../images/tortuga.jpg';
import hibernum from '../images/hibernum.jpg';
import castres from '../images/castres.jpeg';


interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projects2025: Project[] = [
        {
    title: 'TORTUGA DUB CLUB',
    date: '27 Décembre 2025',
    lieu: 'Quinto di Treviso, Italie',
    imageSrc: tortuga
  },
          {
    title: 'HIBERNUM',
    date: '21 Décembre 2025',
    lieu: 'Cornil, France',
    imageSrc: hibernum
  },      {
    title: 'DUB MOONTAIN PARTY',
    date: '29 Novembre 2025',
    lieu: 'Castres, France',
    imageSrc: castres
  },
      {
    title: 'DUB GARDEN',
    date: '21 Novembre 2025',
    lieu: 'Ghent, Belgique',
    imageSrc: Ghent
  },
          {
    title: 'UNITED ROCKERS',
    date: '14 Novembre 2025',
    lieu: 'Opoul, France',
    imageSrc: united_rockers
  },

          {
    title: 'KULTURAL MAQUIS',
    date: '8 Novembre 2025',
    lieu: 'Minerve, France',
    imageSrc: KULTURALMAQUIS
  },
        {
    title: 'DUBAROUND',
    date: '17 Octobre 2025',
    lieu: 'Brest, France',
    imageSrc: DUBAROUND
  },
      {
    title: 'PYRENEES REGGAE DUB FEST',
    date: '10 - 11 Octobre 2025',
    lieu: 'Esbareich, France',
    imageSrc: pyrenees
  },
  {
    title: 'SUBSIDE FESTIVAL',
    date: '5-7 Septembre 2025',
    lieu: 'Ardèche, France',
    imageSrc: subside
  },
    {
    title: 'PALERMO DUB FESTIVAL',
    date: '30 aout 2025',
    lieu: 'Palermo, Sicile',
    imageSrc: palermo
  },
    {
    title: 'FESTIMMERSIF',
    date: '22 Aout 2025',
    lieu: 'Blasimon, France',
    imageSrc: immmersif
  },
  {
    title: 'CABARET VERT',
    date: '14-17 Aout 2025',
    lieu: 'Charleville-Mézières, France',
    imageSrc: cabaret25
  },   
          {
    title: 'VIZARA FESTIVAL',
    date: '8 Aout 2025',
    lieu: 'Montignac Lascaux, France',
    imageSrc: vizara
  },  

      {
    title: 'ISLAND STATION',
    date: '25 juillet 2025',
    lieu: 'Belle-Ile-en-mer, France',
    imageSrc: island_station
  },  
    {
    title: 'INTERNATIONAL DUB GATHERING',
    date: '20 juin 2025',
    lieu: 'Tarragona, Espagne',
    imageSrc: idg
  },  
  {
    title: 'AUBERGIN DUB',
    date: '14 juin 2025',
    lieu: 'Malakoff, France',
    imageSrc: aubergin
  },
      {
    title: 'BARRI',
    date: '30 mai 2025',
    lieu: 'Montpellier, France',
    imageSrc: barri
  },
    {
    title: 'BALTERNO CARAVAN DUB TOUR',
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
    title: 'WINTER DUB CAMP',
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
