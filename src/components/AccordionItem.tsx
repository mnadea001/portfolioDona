import { useContext } from 'react';
import { Accordion } from '@mui/material';
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
  images: { label: string; imgPath: string }[];
  description: string;
  languages: string[];
  number: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, imageSrc, images, description, languages, number }) => {

  const darkModeContext = useContext(DarkModeContext);
  const darkMode = darkModeContext?.darkMode || false;

  const theme = useTheme();

  return (
    <Accordion className="accordion-content">
      <AccordionHeader title={title} imageSrc={imageSrc} darkMode={darkMode} />
      <div className="flex-container">
      <AccordionContent content={content} description={description} number={number} languages={languages} />
      <ImageCarousel images={images} theme={theme} />
      </div>
    </Accordion>
  );
};

export default AccordionItem;
