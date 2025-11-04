
import KULTURALMAQUIS from '../images/KULTURALMAQUIS.jpg';
import united_rockers from '../images/united_rockers.jpg';
import Ghent from '../images/ghent.jpg';


interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projectsnext2025: Project[] = [

        {
    title: 'KULTURAL MAQUIS',
    date: '8 Novembre 2025',
    lieu: 'Minerve, France',
    imageSrc: KULTURALMAQUIS
  },

        {
    title: 'United Rockers',
    date: '14 Novembre 2025',
    lieu: 'Opoul, France',
    imageSrc: united_rockers
  },
    {
    title: 'Dub garden',
    date: '21 Novembre 2025',
    lieu: 'Ghent, Belgique',
    imageSrc: Ghent
  },



];

export default projectsnext2025;
