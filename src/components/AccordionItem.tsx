import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import IconDown from '../assets/icons/IconDown';
import './AccordionItem.css';
import { DarkModeContext } from '../providers/DarkModeProvider';
import { useContext } from 'react';
import Chip from '@mui/material/Chip';import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface AccordionItemProps {
  title: string;
  content: string;
  imageSrc: string;
  description: string;
  languages: [string];
  number: number
}

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, imageSrc, description, languages, number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const darkModeContext = useContext(DarkModeContext);
  const darkMode = darkModeContext?.darkMode || false;
  const textStyle: React.CSSProperties = {
    color: darkMode === true ? '#D5FF3C' : '#333333',
    fontWeight: 'bold'
};
const theme = useTheme();
const [activeStep, setActiveStep] = useState(0);
const maxSteps = images.length;

const handleNext = () => {
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

const handleBack = () => {
  setActiveStep((prevActiveStep) => prevActiveStep - 1);
};

const handleStepChange = (step: number) => {
  setActiveStep(step);
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
        <div className='d-flex'>
<div className='d-block'>
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
</div>
<div className='d-block'>
<Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
               {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
</div>
</div>


      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
