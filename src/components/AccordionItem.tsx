import { useState, useContext } from 'react';
import { Accordion, AccordionDetails } from '@mui/material';
import AccordionHeader from './AccordionHeader';
import AccordionContent from './AccordionContent';
import ImageCarousel from './ImageCarousel';
import { DarkModeContext } from '../providers/DarkModeProvider';
import { useTheme } from '@mui/material/styles';
import './AccordionItem.css';

interface AccordionItemProps {
  title: string;
  content: string;
  imageSrc: string;
  images: { imgPath: string }[]; // Update this line
  description: string;
  languages: string[]; // Update this line
  number: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  imageSrc,
  images,
  description,
  languages,
  number,
}) => {
  const darkModeContext = useContext(DarkModeContext);
  const darkMode = darkModeContext?.darkMode || false;

  const theme = useTheme();

  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
    className={`accordion-content ${expanded ? 'accordion-expanded' : ''} ${darkMode ? 'dark-mode' : ''}`}
      expanded={expanded}
      onChange={handleAccordionChange}
    >
      <AccordionHeader title={title} imageSrc={imageSrc} darkMode={darkMode} />
      <AccordionDetails>
        <div className="flex-container">
          <AccordionContent
            content={content}
            description={description}
            number={number}
            languages={languages}
          />
          <ImageCarousel images={images} theme={theme} />
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
