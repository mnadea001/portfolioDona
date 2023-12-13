import './DiplomaComponent.css';
import { useParallax } from "react-scroll-parallax";
import DiplomaItem from './DiplomaItem';

const DiplomaComponent: React.FC = () => {

    const licenceEco = useParallax<HTMLDivElement>({
        scale: [0.5, 1, 'easeInQuad'],
    });

    const MasterEco = useParallax<HTMLDivElement>({
        scaleX: [1, 0, 'easeInQuad'],
    });

    const LicenceDev = useParallax<HTMLDivElement>({
        easing: "easeInQuad",
        scaleX: [0.5, 1],

    });
    return (
        <>
            <section>
                <div>
                    <h1>DIPLOMA</h1>
                    <div className="spinner">
                        <div className="licenceEco" ref={licenceEco.ref}>
                            <DiplomaItem/>
                          
                        </div>
                        <div className="MasterEco" ref={MasterEco.ref} style={{height: '200px'}}>
                        <DiplomaItem/>
                        </div>
                        <div className="LicenceDev" ref={LicenceDev.ref} >
                        <DiplomaItem/>
                        </div>
                    
                    </div>
                
                </div>
            </section>
        </>
    );
};


export default DiplomaComponent;
