import './DiplomaComponent.css';
import { useParallax } from "react-scroll-parallax";
import { Zoom } from "react-awesome-reveal";
import { useContext } from 'react';
import { DarkModeContext } from '../providers/DarkModeProvider';

const DiplomaComponent: React.FC = () => {
    const darkModeContext = useContext(DarkModeContext);
    const darkMode = darkModeContext?.darkMode || false;
    const textStyle: React.CSSProperties = {
        color: darkMode === true ? '#C996FF' : '#FFE7C2',
    };
    const calistogaStyle: React.CSSProperties = {
        color: darkMode === true ? '#FFE7C2' : '#333333',
    };

    const BtsDev = useParallax<HTMLDivElement>({
        easing: "easeOutQuad",
        translateX: [-100, 100],
        translateY: [-30, -50],
        rotate: [-150, 50]
    });

    const LicenceDev = useParallax<HTMLDivElement>({
        easing: "easeOutQuad",
        translateX: [100, -100],
        translateY: [50, 30],
        rotate: [-150, 50]
    });

    const MasterDev = useParallax<HTMLDivElement>({
        easing: "easeOutQuad",
        translateY: [70, 100],
        rotate: [-150, 50]
    });
    return (
        <>
            <section>
                <div className="container-diplom">
                    <Zoom>
                        <h1 style={textStyle}>DIPLOMES</h1>
                    </Zoom>
                    <h3 style={calistogaStyle} className="calistoga">en Développement</h3>
                    <section className="diplom-container">
                        <div className="absolute-diplom">
                            <div ref={BtsDev.ref} className="spinner buble-style" data-text="TITRE PRO DEV WEB ET MOBILE (2022)" />
                            <div ref={LicenceDev.ref} className="spinner buble-style" data-text="LICENCE CONCEPTEUR DEV. D'APP (2023)" />
                            <div ref={MasterDev.ref} className="spinner buble-style" data-text="MASTER EXPERT DEV WEB (2025)" />
                        </div>
                    </section>

                </div>
                <div className="m-scroll">
                    <div className="m-scroll__title">
                        <div>
                            <p>
                                <a href="#">Licence</a> <a href="#">Economie Gestion</a> &amp; <a href="#">Master </a>  <a href="#">Management International </a>&amp; &nbsp;
                            </p>
                            <p>
                                <a href="#">Licence</a> <a href="#">Economie Gestion</a> &amp; <a href="#">Master </a> <a href="#">Management International </a>&amp; &nbsp;
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default DiplomaComponent;
