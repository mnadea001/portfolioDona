import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import CloseIcon from '../assets/icons/CloseIcon';
import IconButton from '@mui/material/IconButton';
import './Modal.css';
import { Box } from '@mui/material';
import { useState } from 'react';
import Chip from '@mui/material/Chip';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface ModalProps {
  open: boolean;
  onClose: () => void;
  imgSrc: string;
  title: string;
  description: string;
  skills: string[];
  context: string,
  date: string,
  position: string,
  images: { imgPath: string }[];
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, description, skills, context, date, position, images }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const contentStyle: React.CSSProperties = {
      color: '#FFE7C2',
      margin: '0.5em'
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


  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth  >
      <div className="dialog-item">
      <DialogTitle style={contentStyle}>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      </div>
      <DialogContent dividers className="modal-container">
        <div className="flex-container">
          <div className="flex-item">
            <DialogTitle className="modal-title"><strong>{title}</strong></DialogTitle>
            <DialogContentText style={contentStyle} >
              <i>{context}</i>
            </DialogContentText>
            <DialogContentText style={contentStyle} >
              <strong>
                {position}</strong></DialogContentText>
            <DialogContentText style={contentStyle} >
              <small>
                {date}</small></DialogContentText>
            <br></br>
            <DialogContentText style={contentStyle}>{description}</DialogContentText>
            <br></br>
            <DialogContentText style={contentStyle}>
              <strong>Compétences:</strong></DialogContentText>
            <div>
              {skills.map((skill, index) => (
                <Chip key={index} label={skill} style={contentStyle} />
              ))}
            </div>
          </div>
          <div className="flex-item">
            <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
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
                  <Button style={contentStyle} onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    Suivant
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                  </Button>
                }
                backButton={
                  <Button style={contentStyle} onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Préc.
                  </Button>
                }
              />
            </Box>
          </div>
        </div>

      </DialogContent>
    </Dialog >
  );
};

export default Modal;
