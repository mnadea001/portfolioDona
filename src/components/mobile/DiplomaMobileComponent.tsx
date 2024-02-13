import './DiplomaMobile.css';
import { Zoom } from "react-awesome-reveal";
import { useContext } from 'react';
import { DarkModeContext } from '../../providers/DarkModeProvider';

import { useParallax } from "react-scroll-parallax";


const DiplomaMobileComponent: React.FC = () => {
    const darkModeContext = useContext(DarkModeContext);
    const darkMode = darkModeContext?.darkMode || false;
    const textStyle: React.CSSProperties = {
        color: darkMode === true ? '#C996FF' : '#FFE7C2',
    };
    const calistogaStyle: React.CSSProperties = {
        color: darkMode === true ? '#FFE7C2' : '#333333',
    };


    const BtsDev = useParallax<HTMLDivElement>({
        rotate: [-150, 50]
    });

    const LicenceDev = useParallax<HTMLDivElement>({
        rotate: [-150, 50]
    });

    const MasterDev = useParallax<HTMLDivElement>({
        rotate: [-150, 50]
    });

    return (
        <>
            <section className="diplome-section">
                <div className="container-diploms">
                    <Zoom>
                        <h1 className='not-centered' style={textStyle}>DIPLOMES</h1>
                        <h3 className='not-centered' style={calistogaStyle}>en développement</h3>
                    </Zoom>
                    <section className="diploms-container">
                            <div ref={BtsDev.ref} className="bubble-style" data-text="TITRE PRO DEV WEB ET MOBILE (2022)" />
                            <div ref={LicenceDev.ref} className="bubble-style" data-text="LICENCE CONCEPTEUR DEV. D'APP (2023)" />
                            <div ref={MasterDev.ref} className="bubble-style" data-text="MASTER EXPERT DEV WEB (2025)" />
                    </section>
                </div>
            </section>
        </>
    );
};


export default DiplomaMobileComponent;