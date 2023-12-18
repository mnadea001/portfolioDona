import './DiplomaComponent.css';
import { useParallax } from "react-scroll-parallax";

// const diplomaData = [
//     { school: 'Université de Bordeaux', diploma: 'Licence Economie Gestion', year: '2015' },
//     { school: 'IAE Bordeaux / Allemagne / Chine / Pays Bas', diploma: 'Master Management International', year: '2018' },
//     { school: 'EPSI Bordeaux', diploma: 'Licence Développement web', year: '2023' },
//     { school: 'Ynov Bordeaux', diploma: 'Master Expert en développement web', year: '2025' },
// ];

const DiplomaComponent: React.FC = () => {

    // const licenceEco = useParallax<HTMLDivElement>({
    //     easing: "easeOutQuad",
    //     translateX: [-300, 100],
    //     translateY: [0, 100],
    // });

    // const MasterEco = useParallax<HTMLDivElement>({
    //     easing: "easeOutQuad",
    //     translateX: [300, -100],
    //     translateY: [0, 100],
    // });

    const LicenceDev = useParallax<HTMLDivElement>({
        easing: "easeOutQuad",
        translateY: [30, 100],
        scaleX: [1, 0.7, 'easeInQuad'],

    });
    const MasterDev = useParallax<HTMLDivElement>({
        scaleX: [1, 0.7, 'easeOutQuad'],
    });
    return (
        <>
            <section>
                <div className="container">
                    <h1>DIPLOMES</h1>
                    {/* <div className="spinner">
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
                    </div> */}
                    <section className="bg-container">
                        <div className="absolute-text">
                            <div className="colored-circle first-circle" ref={LicenceDev.ref} data-text="LICENCE DEV WEB ET MOBILE (2023)" />
                            <div className="colored-circle second-circle" ref={MasterDev.ref} data-text="MASTER EXPERT DEV WEB (2025)" />
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};


export default DiplomaComponent;
