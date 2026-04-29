
import perigueux from '../images/perigueux.jpg';
import dubtales from '../images/dub-tales.jpg';
import dubcamp26 from '../images/dubcamp26.jpg';
import touko26 from '../images/touko26.jpg';
import fortdec from '../images/fort-dec.jpg';
import ardeida from '../images/ardeida.jpg';
import dubexpress from '../images/dubexpress.jpg';
import ilsalotto from '../images/ilsalotto.jpeg';
import cabaret26 from '../images/cabaret2026.jpg';


interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projectsnext2026: Project[] = [

  {
    title: 'CABARET VERT',
    date: '20-23 Aout 2026',
    lieu: 'Charleville-Mézières, France',
    imageSrc: cabaret26
  },

  {
    title: 'Fort Décibel',
    date: '7 Aout 2026',
    lieu: 'Cussac Fort Médoc, France',
    imageSrc: fortdec
  },
  {
    title: 'Dub Camp',
    date: '11 Juillet 2026',
    lieu: 'Joué-sur-Erdre, France',
    imageSrc: dubcamp26
  },
  {
    title: 'Toukofest',
    date: '30 Mai 2026',
    lieu: 'St Aubin, France',
    imageSrc: touko26
  },
  {
    title: 'Ardeida Festival',
    date: '1 Mai 2026',
    lieu: 'Vilamartin de Valdeorras, Espagne',
    imageSrc: ardeida
  },
  {
    title: 'Dub Express',
    date: '17 Avril 2026',
    lieu: 'Saint-Etienne, France',
    imageSrc: dubexpress
  },
  {
    title: 'Il Salotto',
    date: '11 Avril 2026',
    lieu: 'Cagliari, Sardaigne',
    imageSrc: ilsalotto
  },
  {
    title: 'Dub Tales',
    date: '28 Mars 2026',
    lieu: 'Zaragoza, Espagne',
    imageSrc: dubtales
  },

  {
    title: 'Strictly Vibes',
    date: '7 Mars 2026',
    lieu: 'Périgueux, France',
    imageSrc: perigueux
  },



];

export default projectsnext2026;
