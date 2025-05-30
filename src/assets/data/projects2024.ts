import rootsfoundation from '../images/rootsfoundation.jpg';
import cestasdubco from '../images/cestasdubco.webp';
import wilddub from '../images/wilddub.jpg';
import pinawood from '../images/pinawood.jpg';
import hubert from '../images/hubert.png';
import dubcruiser24 from '../images/dubcruiser24.jpg';
import touko from '../images/touko.jpg';
import inadi24 from '../images/inadi24.jpg';
import zamzam from '../images/zamzam.jpg';
import cabaret24 from '../images/cabaret24.jpg';
import him from '../images/him.jpg';
import polacabana from '../images/Polacabana.png';
import provencal from '../images/provencal.jpg';
import melodub from '../images/melodub.jpg';
import bieres from '../images/1001bieres.jpg';
import festimut from '../images/festimut.jpg';
import grenoble from '../images/grenoble.jpg';
import montde from '../images/montde.jpg';

interface Project {
  title: string;
  date: string;
  lieu: string;
  imageSrc: string;
}

const projects2024: Project[] = [
  {
    title: 'DUB EXCURSION',
    date: '21 Décembre 2024',
    lieu: 'Mont de Marsan, France',
    imageSrc: montde
  },
  {
    title: 'SOUND SYSTEM THERAPY',
    date: '18 Novembre 2024',
    lieu: 'Grenoble, France',
    imageSrc: grenoble
  },
  {
    title: 'FESTIMUT',
    date: '19 Octobre 2024',
    lieu: 'Bordeaux, France',
    imageSrc: festimut
  },
  {
    title: 'PLAY IT LOUD',
    date: '5 Octobre 2024',
    lieu: 'Nantes, France',
    imageSrc: melodub
  },
  {
    title: 'OPEN AIR',
    date: '28 Septembre 2024',
    lieu: 'Bordeaux, France',
    imageSrc: bieres
  },
  {
    title: 'PROVENÇAL DUB CORNER',
    date: '21 Septembre 2024',
    lieu: 'Aubagne, France',
    imageSrc: provencal
  },
  {
    title: 'OPEN AIR POLACABANA',
    date: '7 Septembre 2024',
    lieu: 'Bordeaux, France',
    imageSrc: polacabana
  },
  {
    title: 'HIM DUB FEST',
    date: '28 Aout 2024',
    lieu: 'Rapoula de Coa, Portugal',
    imageSrc: him
  },
  {
    title: 'CABARET VERT FESTIVAL',
    date: '15 - 18 Aout 2024',
    lieu: 'Charleville-Mézières, France',
    imageSrc: cabaret24
  },
  {
    title: 'RIDE IN DUB',
    date: '27 Juillet 2024',
    lieu: 'La Teste de Buch, France',
    imageSrc: zamzam
  },
  {
    title: 'INA DI SOUND BIRTHDAY',
    date: '22 Juin 2024',
    lieu: 'Nantes, France',
    imageSrc: inadi24
  },
  {
    title: 'TOUKOFEST',
    date: '15 Juin 2024',
    lieu: 'Saint-Aubin (40), France',
    imageSrc: touko
  },
  {
    title: 'DUB CRUISER FEST',
    date: '14 Juin 2024',
    lieu: 'Lyon, France',
    imageSrc: dubcruiser24
  },
  {
    title: 'HUBERT DUB SCHOOL',
    date: '3 Mai 2024',
    lieu: 'Captieux, France',
    imageSrc: hubert
  },
  {
    title: 'PINAWOOD SUB STORY',
    date: '9 Mars 2024',
    lieu: 'Mérignac, France',
    imageSrc: pinawood
  },
  {
    title: 'WILD DUB SESSION',
    date: '27 Janvier 2024',
    lieu: 'Reims, France',
    imageSrc: wilddub
  },
  {
    title: 'CESTAS DUB CONNECTION',
    date: '20 Janvier 2024',
    lieu: 'Cestas, France',
    imageSrc: cestasdubco
  },
  {
    title: 'ROOTS FOUNDATION FEST',
    date: '5 - 6 Janvier 2024',
    lieu: 'Villars-sur-Ollon, Suisse',
    imageSrc: rootsfoundation
  }
];

export default projects2024;
