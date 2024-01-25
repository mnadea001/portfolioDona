import { useState } from 'react';
import { AccordionSummary, Typography } from '@mui/material';
import IconDown from '../assets/icons/IconDown';
interface AccordionHeaderProps {
  title: string;
  imageSrc: string;
  darkMode: boolean;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ title, imageSrc, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const textStyle: React.CSSProperties = {
    color: darkMode === true ? '#D5FF3C' : '#333333',
    fontWeight: 'bold'
  };

  return (
    <AccordionSummary
      expandIcon={<IconDown className={darkMode ? 'iconDown' : 'iconDowndark'} />}
      aria-controls="panel1a-content"
      id="panel1a-header"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="title"
    >
      <Typography className='titleText' style={textStyle}>{title}</Typography>
      {isHovered && (
        <img
          src={imageSrc}
          alt={`Image for ${title}`}
          className="hovered-image"
          style={{ maxWidth: '100%', height: 'auto', maxHeight: '350px', marginTop: '10px', marginLeft: 'auto' }}
        />
      )}
    </AccordionSummary>
  );
};

export default AccordionHeader;
