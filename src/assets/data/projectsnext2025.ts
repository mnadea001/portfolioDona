
import cabaret25 from '../images/cabaret25.png';
import dubquake from '../images/dubquake.jpg';
import subside from '../images/subside.jpg';

interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projectsnext2025: Project[] = [
  {
    title: 'DUBQUAKE',
    date: '26 avril 2025',
    lieu: 'Genève, Suisse',
    imageSrc: dubquake
  },  
  {
    title: 'Cabaret Vert',
    date: '14-17 Aout 2025',
    lieu: 'Charleville-Mézières, France',
    imageSrc: cabaret25
  },
  {
    title: 'SubSide Festival',
    date: '5-7 septembre 2025',
    lieu: 'Ardèche, Suisse',
    imageSrc: subside
  }
];

export default projectsnext2025;
