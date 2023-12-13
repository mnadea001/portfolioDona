// AccordionItem.tsx
import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import IconDown from '../assets/IconDown';

interface AccordionItemProps {
  title: string;
  content: string;
  imageSrc: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<IconDown />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Typography>{title}</Typography>
        {isHovered && (
        <img
          src={imageSrc}
          alt={`Image for ${title}`}
          className="hovered-image"
          style={{ maxWidth: '100%', height: 'auto', maxHeight: '100px', marginTop: '10px', marginLeft:'auto' }}
        />
      )}
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>

    </Accordion>
  );
};

export default AccordionItem;
