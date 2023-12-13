import './DiplomaComponent.css';
import { useParallax } from "react-scroll-parallax";
import DiplomaItem from './DiplomaItem';

const diplomaData = [
    { school: 'Université de Bordeaux', diploma: 'Licence Economie Gestion', year: '2015' },
    { school: 'IAE Bordeaux / Allemagne / Chine / Pays Bas', diploma: 'Master Management International', year: '2018' },
    { school: 'EPSI Bordeaux', diploma: 'Licence Développement web', year: '2023' },
    { school: 'Ynov Bordeaux', diploma: 'Master Expert en développement web', year: '2025' },
  ];

const DiplomaComponent: React.FC = () => {

    const licenceEco = useParallax<HTMLDivElement>({
        scale: [0.7, 1, 'easeInQuad'],
    });

    const MasterEco = useParallax<HTMLDivElement>({
        scaleX: [1, 0.7, 'easeInQuad'],
    });

    const LicenceDev = useParallax<HTMLDivElement>({
        easing: "easeInQuad",
        scaleX: [0.5, 0.9],

    });
    const MasterDev = useParallax<HTMLDivElement>({
        scaleX: [1, 0.7, 'easeInQuad'],
    });
    return (
        <>
            <section>
                <div className="container">
                    <h1>DIPLOMES</h1>
                    <div className="spinner">
                        <div className="licenceEco" ref={licenceEco.ref}>
                        <DiplomaItem data={diplomaData[0]} />
                        </div>
                        <div className="MasterEco" ref={MasterEco.ref}>
                        <DiplomaItem data={diplomaData[1]} />
                        </div>
                        <div className="LicenceDev" ref={LicenceDev.ref} >
                        <DiplomaItem data={diplomaData[2]} />
                        </div>
                        <div className="MasterDev" ref={MasterDev.ref} >
                        <DiplomaItem data={diplomaData[3]} />
                        </div>
                    </div>
                
                </div>
            </section>
        </>
    );
};


export default DiplomaComponent;
