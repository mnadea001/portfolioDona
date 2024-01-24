import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import IconDown from '../assets/icons/IconDown';
import './AccordionItem.css';
import { DarkModeContext } from '../providers/DarkModeProvider';
import { useContext } from 'react';
import Chip from '@mui/material/Chip';

interface AccordionItemProps {
  title: string;
  content: string;
  imageSrc: string;
  description: string;
  languages: [string];
  number: number
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, imageSrc, description, languages, number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const darkModeContext = useContext(DarkModeContext);
  const darkMode = darkModeContext?.darkMode || false;
  const textStyle: React.CSSProperties = {
    color: darkMode === true ? '#D5FF3C' : '#333333',
    fontWeight: 'bold'
};
  return (
    <Accordion
      style={{ backgroundColor: 'transparent', border: 'none' }}
    >
      <AccordionSummary
        expandIcon={<IconDown className={darkMode ? 'iconDown' : 'iconDowndark'}  />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="title"
      >
        <Typography className='title' style={textStyle}>{title}</Typography>
        {isHovered && (
          <img
            src={imageSrc}
            alt={`Image for ${title}`}
            className="hovered-image"
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '350px', marginTop: '10px', marginLeft: 'auto' }}
          />
        )}

      </AccordionSummary>
      <AccordionDetails style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)',}}>
        <Typography  style={textStyle}>{content}
        </Typography>
        <Typography>
          {description}
        </Typography>
        <Typography>
          Taille équipe: {number}
        </Typography>
        <Typography>Skills:</Typography>
        <div>
          {languages.map((language, index) => (
            <Chip key={index} label={language} style={{ margin: '0.5em' }} />
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
