import './DiplomaMobile.css';
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



    return (
        <>
            <section className="diplome-section">
                <div className="container-diploms">
                    <Zoom>
                        <h1 style={textStyle}>DIPLOMES</h1>
                        <h3 style={calistogaStyle}>en développement</h3>
                    </Zoom>
    

                </div>

            </section>
        </>
    );
};


export default DiplomaComponent;
