import './AboutSection.css'

import { Zoom, Slide } from 'react-awesome-reveal'
import { useContext } from 'react'
import { DarkModeContext } from '../providers/DarkModeProvider'
import ImgBio from '../assets/images/imgBio.png'
import DiplomaComponent from './DiplomaComponent'

const AboutSection: React.FC = () => {
  const darkModeContext = useContext(DarkModeContext)
  const darkMode = darkModeContext?.darkMode || false
  const textStyle: React.CSSProperties = {
    color: darkMode === true ? '#C996FF' : '#FFE7C2'
  }

  const isMobile = window.innerWidth <= 768

  return (
    <>
      <div className="about-section">
        <Zoom>
          <p className={isMobile ? 'not-centered title-about' : 'title-about'} style={textStyle}>
            Bio
          </p>
        </Zoom>
        <div className="about-box">
          <div className="about-text">
            {' '}
            <Slide>
              <p>
                {' '}
                Dub addict depuis plus d'une dizaine d’années, Matilda commence à collectionner les vinyls début 2020 à Paris. Encouragée
                par ses ami.e.s (Meladub, Erinejah, Peeny Wally, Neboty Roots, Snoww Dub, Blissful Dub..) elle commence à sélecter durant le
                confinement. Depuis elle a joué sur une 40aine d'événements en France, en Suisse et récemment au Portugal, soutenue par de
                nombreux acteurs du milieu et amis: Garladub, Selecta Spirit, RDS, Pastek Frequencies, Petah Higrade, Catharsis, Uzly Hifi,
                Asher Selector…  Avec une sélection allant du Roots au stepper, Matilda aime faire voyager son public à travers les styles.
                Une devise: Good vibes !
              </p>
            </Slide>
          </div>

          <div className="about-img">
            <Slide>
              <img src={ImgBio} style={{ maxWidth: '100%', height: 'auto', maxHeight: '500px', marginTop: '10px', marginLeft: 'auto' }} />
            </Slide>
          </div>
        </div>
      </div>
    <DiplomaComponent/>
    </>
  )
}

export default AboutSection
