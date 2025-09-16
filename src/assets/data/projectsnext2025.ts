

import pyrenees from '../images/PYRENEES.jpg';
import DUBAROUND from '../images/DUBAROUND.png';


interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projectsnext2025: Project[] = [



        {
    title: 'Dubaround',
    date: '17 Octobre 2025',
    lieu: 'Brest, France',
    imageSrc: DUBAROUND
  },
    {
    title: 'Pyrénées Reggae Dub Fest',
    date: '10 - 11 Octobre 2025',
    lieu: 'Esbareich, France',
    imageSrc: pyrenees
  },



];

export default projectsnext2025;
