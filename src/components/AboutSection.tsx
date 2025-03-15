import './AboutSection.css'

import { Zoom, Slide } from 'react-awesome-reveal'
import ImgBio from '../assets/images/imgBio.jpg'

const AboutSection: React.FC = () => {



  return (
    <>
    <div className="main">
      <div className="about-section">
        <Zoom>
          <p className="title-about">
            Histoire
          </p>
        </Zoom>
        <div className="about-box">
        <div className="about-img">
            <Slide>
              <img src={ImgBio} style={{ maxWidth: '100%', height: 'auto', maxHeight: '500px', marginTop: '10px', marginLeft: 'auto' }} />
            </Slide>
          </div>
          <div className="about-text">
            <Slide>
              <p>
                Dub addict depuis plus d'une dizaine d’années, Matilda commence à collectionner les vinyls début 2020. Encouragée
                par ses ami.e.s (Meladub, Erinejah, Peeny Wally, Neboty Roots, Snoww Dub, Blissful Dub..) elle commence à sélecter durant le
                confinement. Depuis elle a joué sur une 60aine d'événements en France, en Suisse, au Portugal et en Espagne, soutenue par de
                nombreux acteurs du milieu et amis: Garladub, Selecta Spirit, RDS, Pastek Frequencies, Petah Higrade, Catharsis, Uzly Hifi,
                Asher Selector…  Avec une sélection allant du Roots au stepper, Matilda aime faire voyager son public à travers les styles.
                Une devise: Good vibes !
              </p>
            </Slide>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default AboutSection
