

import dubcamp26 from '../images/dubcamp26.jpg';
import resoco from '../images/resonanceco.jpg';
import fortdec from '../images/fort-dec.jpg';
import cabaret26 from '../images/cabaret2026.jpg';


interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projectsnext2026: Project[] = [


  {
    title: 'Dub Camp',
    date: '11 Juillet 2026',
    lieu: 'Joué-sur-Erdre, France',
    imageSrc: dubcamp26
  },
  {
    title: 'Resonance Collective Festival',
    date: '17 Juillet 2026',
    lieu: 'Monnet la ville, France',
    imageSrc: resoco
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
