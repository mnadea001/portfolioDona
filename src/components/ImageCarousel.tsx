import { useState } from 'react';
import { Box, MobileStepper, Button } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import { KeyboardArrowRight } from '@mui/icons-material';
import { SxProps, Theme } from '@mui/material/styles';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface ImageCarouselProps {
  images: { label: string; imgPath: string }[];
  theme: Theme; // Add a proper type for theme
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, theme }) => {
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

  const carouselStyle: SxProps = {
    maxWidth: 400,
    flexGrow: 1,
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
                    borderRadius: '5px'
                  }}
                  src={step.imgPath}
                  alt='image illustrant expérience'
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
            <Button size="small" style={{ color: '#333333' }}  onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Suivant
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" style={{ color: '#333333' }} onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Préc.
            </Button>
          }
        />
      </Box>
    </div>
  );
};

export default ImageCarousel;
