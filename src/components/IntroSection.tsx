
import videoSrc from '../assets/videos/video.mov'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import { Zoom } from 'react-awesome-reveal'

const IntroSection: React.FC = () => {
  useEffect(() => {
    // Enregistrez le plugin ScrollTrigger dans GSAP
    gsap.registerPlugin(ScrollTrigger)

    // Animation pour agrandir la vidéo lors du scroll
    gsap.fromTo('.video-player',
      { scale: 0.5 }, // État initial, vidéo petite
      {
        scale: 1, // État final, vidéo à taille normale
        scrollTrigger: {
          trigger: '.intro-section', // Élément déclencheur
          start: 'top top', // Démarre lorsque le haut de la section atteint le haut de la page
          end: '+=1500', // Animation se déroule sur 1500px de scroll
          scrub: true // Permet à l'animation de suivre le scroll (effet fluide)
        }
      }
    )
  }, [])

  return (
    <>
      <Zoom>
        <h1>
          selectress reggae dub <br></br> basée à Bordeaux
        </h1>
      </Zoom>

      <div>
        <video className="video-player" src={videoSrc} autoPlay loop muted width="100%" height="auto" />
      </div>
    </>
  )
}

export default IntroSection
