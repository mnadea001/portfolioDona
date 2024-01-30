import { AccordionDetails, Typography, Chip } from '@mui/material';
import { DarkModeContext } from '../providers/DarkModeProvider';
import { useContext } from 'react';

interface AccordionContentProps {
    content: string;
    description: string;
    number: number;
    languages: string[];
}

const AccordionContent: React.FC<AccordionContentProps> = ({ content, description, number, languages }) => {
    const darkModeContext = useContext(DarkModeContext);
    const darkMode = darkModeContext?.darkMode || false;
    const textStyle: React.CSSProperties = {
        color: darkMode === true ? '#D5FF3C' : '#333333',
        margin: '0.5em'
    };

    return (
        <div className="flex-item">
            <AccordionDetails>
                <div className="content-container flex-container">
                    <div className="flex-item">
                        <Typography style={textStyle}><strong>{content}</strong></Typography>
                        <br></br>
                        <Typography style={textStyle}>{description}</Typography>
                        <br></br>
                        <Typography style={textStyle}>
                        <strong>Taille équipe:</strong> {number}</Typography>
                        <br></br>
                        <Typography style={textStyle}>
                            <strong>Compétences:</strong>
                        </Typography>
                        <div>
                            {languages.map((language, index) => (
                                <Chip key={index} label={language} style={textStyle} />
                            ))}
                        </div>
                    </div>
                </div>
            </AccordionDetails>
        </div>
    )
        ;
};

export default AccordionContent;
