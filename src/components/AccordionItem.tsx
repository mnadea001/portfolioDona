import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import IconDown from '../assets/IconDown';
import './AccordionItem.css';

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

  return (
    <Accordion
      style={{ backgroundColor: 'transparent' }}
    >
      <AccordionSummary
        expandIcon={<IconDown />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="title"
      >
        <Typography>{title}</Typography>
        {isHovered && (
          <img
            src={imageSrc}
            alt={`Image for ${title}`}
            className="hovered-image"
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '100px', marginTop: '10px', marginLeft: 'auto' }}
          />
        )}
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {content}
        </Typography>
        <Typography>
          {description}
        </Typography>
        <Typography>
          Number of People: {number}
        </Typography>
        <Typography>
          Languages: {languages.map((language, index) => (
            <span key={index}>{language}{index !== languages.length - 1 ? ', ' : ''}</span>
          ))}
        </Typography>
      </AccordionDetails>

    </Accordion>
  );
};

export default AccordionItem;
