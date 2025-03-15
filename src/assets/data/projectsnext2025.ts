import dubarena from '../images/dubarena.jpg';
import dubquake from '../images/dubquake.jpg';

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
    title: 'DUB ARENA',
    date: '5 avril 2025',
    lieu: 'Portet sur Garonne, France',
    imageSrc: dubarena
  }
];

export default projectsnext2025;
