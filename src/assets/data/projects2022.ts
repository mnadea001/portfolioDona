import antidote from '../images/antidote.jpg';
import zigzag2022 from '../images/zigzag2022.jpg';
import dubcruiz from '../images/dubcruiz.jpg';
import dubnkulcha from '../images/dubnkulcha.jpg';
import garrigue from '../images/garrigue.jpg';
import dubcruiser from '../images/dubcruiser.jpg';
import ethiopie from '../images/ethiopie.jpg';
import cabaretvert22 from '../images/cabaretvert22.jpg';
import espaceds from '../images/espaceds.jpg';
import dasuke from '../images/dasuke.jpg';

interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projects2022: Project[] = [
  {
    title: 'SOIREE REGGAE DUB',
    date: '18 Novembre 2022',
    lieu: 'Bordeaux, France',
    imageSrc: dasuke
  },
  {
    title: 'TRI DIMENSION',
    date: '1 Octobre 2022',
    lieu: 'Bordeaux, France',
    imageSrc: espaceds
  },
  {
    title: 'CABARET VERT FESTIVAL',
    date: '17-18 Aout 2022',
    lieu: 'Charleville-Mézières, France
