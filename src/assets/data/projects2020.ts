import cluster from '../images/cluster.jpg';
import guetopen from '../images/guetopen.jpg';
import neboty from '../images/neboty.jpeg';

interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projects2020: Project[] = [
  {
    title: 'NEBOTY ROOTS CORNER',
    date: '15 Aout 2020',
    lieu: 'Paris, France',
    imageSrc: neboty
  },
  {
    title: 'SPIRIT SOUND SYSTEM',
    date: '14 Aout 2020',
    lieu: 'Ivry-Sur-Seine, France',
    imageSrc: guetopen
  },
  {
    title: 'CLUSTER PARADISE',
    date: '24 - 25 Juillet 2020',
    lieu: 'Mélamare, France',
    imageSrc: cluster
  }
];

export default projects2020;
