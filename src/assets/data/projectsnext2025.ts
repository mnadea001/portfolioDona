import dubarena from '../images/dubarena.jpg';
import dubquake from '../images/dubquake.jpg';
import cafe_pompier from '../images/cafe_pompier.jpg';
import subside from '../images/subside.jpg';

interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projectsnext2025: Project[] = [
  {
    title: 'CAFE POMPIER',
    date: '21 mars 2025',
    lieu: 'Bordeaux, France',
    imageSrc: cafe_pompier
  },
  {
    title: 'DUB ARENA',
    date: '5 avril 2025',
    lieu: 'Portet sur Garonne, France',
    imageSrc: dubarena
  },
  {
    title: 'DUBQUAKE',
    date: '26 avril 2025',
    lieu: 'Genève, Suisse',
    imageSrc: dubquake
  },
  {
    title: 'SubSide Festival',
    date: '5-7 septembre 2025',
    lieu: 'Ardèche, Suisse',
    imageSrc: subside
  }
];

export default projectsnext2025;
