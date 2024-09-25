import './DubSection.css';
import videoSrc from '../assets/videos/video.mov';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

const IntroSection: React.FC = () => {
  useEffect(() => {
    // Enregistrez le plugin ScrollTrigger dans GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animation pour rétrécir la vidéo lors du scroll
    gsap.to('.video-player', {
      scale: 0.5, // Échelle à laquelle la vidéo va rétrécir (50%)
      scrollTrigger: {
        trigger: '.intro-section', // Élément déclencheur
        start: 'top top', // Démarre lorsque le haut de la section atteint le haut de la page
        end: 'bottom top', // Finit lorsque le bas de la section atteint le haut de la page
        scrub: true, // Permet à l'animation de suivre le scroll (effet fluide)
      },
    });
  }, []);

  return (
    <>
      <div className="intro-section">
        <video
          className="video-player"
          src={videoSrc}
          autoPlay
          loop
          muted
          width="100%"
          height="auto"
        />
      </div>
    </>
  );
};

export default IntroSection;
