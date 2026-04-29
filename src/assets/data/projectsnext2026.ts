

import dubcamp26 from '../images/dubcamp26.jpg';
import touko26 from '../images/touko26.jpg';
import fortdec from '../images/fort-dec.jpg';
import ardeida from '../images/ardeida.jpg';
import cabaret26 from '../images/cabaret2026.jpg';


interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projectsnext2026: Project[] = [

  {
    title: 'Ardeida Festival',
    date: '1 Mai 2026',
    lieu: 'Vilamartin de Valdeorras, Espagne',
    imageSrc: ardeida
  },
  {
    title: 'Toukofest',
    date: '30 Mai 2026',
    lieu: 'St Aubin, France',
    imageSrc: touko26
  },
  {
    title: 'Dub Camp',
    date: '11 Juillet 2026',
    lieu: 'Joué-sur-Erdre, France',
    imageSrc: dubcamp26
  },

  {
    title: 'Fort Décibel',
    date: '7 Aout 2026',
    lieu: 'Cussac Fort Médoc, France',
    imageSrc: fortdec
  },
  {
    title: 'CABARET VERT',
    date: '20-23 Aout 2026',
    lieu: 'Charleville-Mézières, France',
    imageSrc: cabaret26
  },

];

export default projectsnext2026;
