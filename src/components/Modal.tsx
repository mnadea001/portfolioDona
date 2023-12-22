
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import CloseIcon from '../assets/icons/CloseIcon';
import IconButton from '@mui/material/IconButton';
import './Modal.css';
import Chip from '@mui/material/Chip';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  imgSrc: string;
  title: string;
  description: string;
  skills: string[];
  context: string, 
  date: string,
  position: string
}

const Modal: React.FC<ModalProps> = ({ open, onClose, imgSrc, title, description, skills, context, date, position }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
    <DialogTitle>
      <IconButton
        edge="end"
        color="inherit"
        onClick={onClose}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent dividers>
      <img src={imgSrc} alt={`Image for ${title}`} className="modal-image" />
      <DialogTitle>{title}</DialogTitle>
      <DialogContentText>{context}</DialogContentText>
      <DialogContentText>{position}</DialogContentText>
      <DialogContentText>{date}</DialogContentText>
      <DialogContentText>{description}</DialogContentText>
      <DialogContentText>Skills:</DialogContentText>
        <div>
          {skills.map((skill, index) => (
            <Chip key={index} label={skill} style={{ margin: '0.5em' }} />
          ))}
        </div>
    </DialogContent>
  </Dialog>
  );
};

export default Modal;
