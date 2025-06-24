
import cabaret25 from '../images/cabaret25.png';
import island_station from '../images/island_station.jpg';
import vizara from '../images/vizara.jpg';
import immmersif from '../images/immmersif.png';
import palermo from '../images/palermo.jpeg';
import subside from '../images/subside.jpg';

interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projectsnext2025: Project[] = [


      {
    title: 'Island Station',
    date: '25 juillet 2025',
    lieu: 'Belle-Ile-en-mer, France',
    imageSrc: island_station
  },  
            {
    title: 'Vizara Festival',
    date: '8 Aout 2025',
    lieu: 'Montignac Lascaux, France',
    imageSrc: vizara
  },  
  {
    title: 'Cabaret Vert',
    date: '14-17 Aout 2025',
    lieu: 'Charleville-Mézières, France',
    imageSrc: cabaret25
  },   
      {
    title: 'FEST.IMMERSIF',
    date: '5-7 septembre 2025',
    lieu: 'Blasimon, France',
    imageSrc: immmersif
  },
    {
    title: 'Palermo Dub Festival',
    date: '30 aout 2025',
    lieu: 'Palermo, Italie',
    imageSrc: palermo
  },
    {
    title: 'SubSide Festival',
    date: '5-7 septembre 2025',
    lieu: 'Ardèche, France',
    imageSrc: subside
  },




];

export default projectsnext2025;
