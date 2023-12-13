
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CloseIcon from '../assets/CloseIcon';
import IconButton from '@mui/material/IconButton';
import './Modal.css';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  imgSrc: string;
  title: string;
  description: string;
  skills: string[];
}

const Modal: React.FC<ModalProps> = ({ open, onClose, imgSrc, title, description, skills }) => {
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
        {title}
      </DialogTitle>
      <DialogContent dividers>
        <img src={imgSrc} alt={`Image for ${title}`} className="modal-image" />
        <DialogContentText>{description}</DialogContentText>
        <DialogContentText>Skills: {skills.join(', ')}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
