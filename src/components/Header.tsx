import { useState } from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './Header.css';
import IconMenu from '../assets/IconMenu';
import CloseIcon from '../assets/CloseIcon';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import ByeComponent from './ByeComponent';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <IconButton onClick={toggleModal} style={{ color: '#fff' }}>
        <IconMenu />
      </IconButton>
      <Dialog open={isModalOpen} onClose={toggleModal} fullScreen>
        <DialogTitle>
          <IconButton edge="end" color="inherit" onClick={toggleModal} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <ByeComponent />
        <DialogContent>

          <a href="#Competences">Compétences</a>
          <a href="#Projects">Projects</a>
          <a href="#Experiences">Expériences</a>

        </DialogContent>
      </Dialog>
      <Outlet />
    </>
  );
};

export default Header;