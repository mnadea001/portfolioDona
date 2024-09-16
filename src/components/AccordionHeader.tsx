
import { AccordionSummary, Typography } from '@mui/material';
import IconDown from '../assets/icons/IconDown';
interface AccordionHeaderProps {
  title: string;

  darkMode: boolean;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ title, darkMode }) => {


  const textStyle: React.CSSProperties = {
    color: darkMode === true ? '#D5FF3C' : '#333333',
    fontWeight: 'bold'
  };

  return (
    <AccordionSummary
      expandIcon={<IconDown className={darkMode ? 'iconDown' : 'iconDowndark'} />}
      aria-controls="panel1a-content"
      id="panel1a-header"
      className={darkMode ? 'title-dark' : 'title'}
    >
      <Typography className={darkMode ? 'titleText-dark' : 'titleText'} style={textStyle}>{title}</Typography>

    </AccordionSummary>
  );
};

export default AccordionHeader;
