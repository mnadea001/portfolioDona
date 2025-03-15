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
    lieu: 'Charleville-Mézières, France',
    imageSrc: cabaretvert22
  },
  {
    title: 'TOUS UNIS POUR L’ETHIOPIE',
    date: '26 Juin 2022',
    lieu: 'Vitry-Sur-Seine, France',
    imageSrc: ethiopie
  },
  {
    title: 'DUB CRUISER FINAL',
    date: '25 Juin 2022',
    lieu: 'Lyon, France',
    imageSrc: dubcruiser
  },
  {
    title: 'GARRIGUE CORNER',
    date: '18 Juin 2022',
    lieu: 'Garrigue, France',
    imageSrc: garrigue
  },
  {
    title: 'DUB & KULCHA AKADEMY',
    date: '11 Juin 2022',
    lieu: 'Mayenne, France',
    imageSrc: dubnkulcha
  },
  {
    title: 'DUB CRUISER #2',
    date: '11 Mars 2022',
    lieu: 'Lyon, France',
    imageSrc: dubcruiz
  },
  {
    title: 'SOIREE REGGAE DUB',
    date: 'Février 2022',
    lieu: 'Bordeaux, France',
    imageSrc: zigzag2022
  },
  {
    title: 'ANTIDOTE OF THE NATION',
    date: '7 Janvier 2022',
    lieu: 'Bordeaux, France',
    imageSrc: antidote
  }
];

export default projects2022;
