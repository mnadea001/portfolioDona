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
        fontWeight: 'bold',
        textTransform: 'uppercase'
    };

    return (
        <div className="flex-item">
            <AccordionDetails>
                <div className="content-container flex-container">
                    <div className="flex-item">
                        <Typography style={textStyle}>{content}</Typography>
                        <br></br>
                        <Typography>{description}</Typography>
                        <br></br>
                        <Typography>Taille équipe: {number}</Typography>
                        <br></br>
                        <Typography>
                            <strong>Compétences:</strong>
                        </Typography>
                        <div>
                            {languages.map((language, index) => (
                                <Chip key={index} label={language} style={{ margin: '0.5em' }} />
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
