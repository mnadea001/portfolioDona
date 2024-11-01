import { useLottie, useLottieInteractivity} from 'lottie-react';
import Anim from '../assets/turntable.json'  

const style = {
    height: 200,
  }
  
  const options = {
    animationData: Anim,
    autoplay: false,
  }
const DiskSection: React.FC = () => {

  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 51],
      },
    ],
  });
  return Animation;
}

export default DiskSection
;
