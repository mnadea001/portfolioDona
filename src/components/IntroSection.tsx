import './DubSection.css'
import videoSrc from '../assets/videos/video.mov'

const IntroSection: React.FC = () => {
  return (
    <>
      <div className="intro-section">
        <video
          className="video-player"
          src={videoSrc}
          // controls
          autoPlay // Lance automatiquement la vidéo
          loop // Boucle la vidéo une fois terminée
          muted // Coupe le son par défaut
          width="100%" // Ajuste la largeur de la vidéo
          height="auto" // Ajuste la hauteur automatiquement
        />
      </div>
    </>
  )
}

export default IntroSection
