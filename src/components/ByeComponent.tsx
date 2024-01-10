// Import necessary libraries and styles
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from './styles.module.css';

// Define animated components
const AnimFeTurbulence = animated('feTurbulence');
const AnimFeDisplacementMap = animated('feDisplacementMap');

// Define ByeComponent
const ByeComponent: React.FC = () => {
  const [open, toggle] = useState(false);
  const [{ freq, factor, scale, opacity }] = useSpring(
    () => ({
      reverse: open,
      from: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
      to: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' },
      config: { duration: 3000 },
    }),
    [open]
  );

  return (
    <div className={styles.container} onClick={() => toggle(!open)}>
      {/* Use inline style to set width to 100vw */}
      <animated.svg
        className={styles.svg}
        style={{ scale, opacity, width: '100vw' }}
        viewBox="0 0 1278 446"
      >
        <defs>
          <filter id="water">
            <AnimFeTurbulence
              type="fractalNoise"
              baseFrequency={freq}
              numOctaves="2"
              result="TURB"
              seed="8"
            />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={factor}
            />
          </filter>
        </defs>
        <g filter="url(#water)">
          <rect width="100%" height="100vh" fill="#D5FF3C" />
          <text fill="#C996FF" font-size="175" font-family="Verdana" x="250" y="186">
            WELCOME
          </text>
        </g>
      </animated.svg>
    </div>
  );
};

export default ByeComponent;
