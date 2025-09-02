

import pyrenees from '../images/PYRENEES.jpg';
import subside from '../images/subside.jpg';

interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projectsnext2025: Project[] = [



    {
    title: 'SubSide Festival',
    date: '5-7 septembre 2025',
    lieu: 'Ardèche, France',
    imageSrc: subside
  },
    {
    title: 'Pyrénées Reggae Dub Fest',
    date: '10 - 11 Octobre 2025',
    lieu: 'Esbareich, France',
    imageSrc: pyrenees
  },



];

export default projectsnext2025;
