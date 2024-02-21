import { useState } from 'react';
import { Box, MobileStepper, Button } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SxProps, Theme } from '@mui/material/styles';
import { DarkModeContext } from '../providers/DarkModeProvider';
import { useContext } from 'react';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface ImageCarouselProps {
  images: { imgPath: string }[];
  theme: Theme; // Add a proper type for theme
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, theme }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const darkModeContext = useContext(DarkModeContext);
  const darkMode = darkModeContext?.darkMode || false;
  const textStyle: React.CSSProperties = {
      color: darkMode === true ? '#D5FF3C' : '#333333'
  };


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const carouselStyle: SxProps = {
    maxWidth: 400,
    flexGrow: 1,
    alignSelf: 'center'
  };

  return (
    <div className="flex-item">
      <Box sx={carouselStyle}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 255,
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                    borderRadius: '5px',
                    objectFit: 'contain'
                  }}
                  src={step.imgPath}
                  alt='image illustrant projet'
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
                steps={maxSteps}
                position="static"
                sx={{
                  backgroundColor: 'transparent'
                }}
                activeStep={activeStep}
                nextButton={
                  <Button style={textStyle} onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    {theme.direction === 'rtl' ? <ArrowBackIcon /> : <ArrowForwardIcon />}
                  </Button>
                }
                backButton={
                  <Button style={textStyle} onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <ArrowForwardIcon /> : <ArrowBackIcon />}
                  </Button>
                }
              />
      </Box>
    </div>
  );
};

export default ImageCarousel;
