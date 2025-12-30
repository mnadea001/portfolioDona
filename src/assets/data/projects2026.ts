
import leysin from '../images/leysin.jpg';
import dubcamp26 from '../images/dubcamp26.jpg';


interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projects2026: Project[] = [

        {
    title: 'Dub Soundz Leysin',
    date: '21 Février 2026',
    lieu: 'Leysin, Suisse',
    imageSrc: leysin
  },

        {
    title: 'Dub Camp',
    date: '11 Juillet 2026',
    lieu: 'Joué-sur-Erdre, France',
    imageSrc: dubcamp26
  },




];

export default projects2026;
