import { useLottie } from "lottie-react";
import Anim from "../assets/turntable.json";

const style = {
  height: 200,
};

const options = {
  animationData: Anim,
  autoplay: true,  // Activation de l'autoplay
  loop: true,      // Permet de répéter l'animation en boucle
};

const DiskSection: React.FC = () => {
  const lottieObj = useLottie(options, style);

  return lottieObj.View; // Retourne directement l'animation
};

export default DiskSection;
