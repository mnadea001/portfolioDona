import dubnkulcha1 from '../images/dubnkulcha1.jpg';

interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projects2021: Project[] = [
  {
    title: 'DUB & KULCHA AKADEMY',
    date: '11 Septembre 2021',
    lieu: 'Nyoiseau, France',
    imageSrc: dubnkulcha1
  }
];

export default projects2021;
