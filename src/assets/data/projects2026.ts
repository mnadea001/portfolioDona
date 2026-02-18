
import perigueux from '../images/perigueux.jpg';
import dubtales from '../images/dub-tales.jpg';
import dubcamp26 from '../images/dubcamp26.jpg';
import touko26 from '../images/touko26.jpg';
import fortdec from '../images/fort-dec.jpg';


interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projectsnext2026: Project[] = [

        {
    title: 'Strictly Vibes',
    date: '7 Mars 2026',
    lieu: 'Périgueux, France',
    imageSrc: perigueux
  },
        {
    title: 'Dub Tales',
    date: '28 Mars 2026',
    lieu: 'Zaragoza, Espagne',
    imageSrc: dubtales
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


];

export default projectsnext2026;
