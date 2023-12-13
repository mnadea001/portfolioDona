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
        <DialogContent>
          <List>
            <ListItem button component={NavLink} to="/" onClick={toggleModal}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={NavLink} to="/slider" onClick={toggleModal}>
              <ListItemText primary="Compétences" />
            </ListItem>
            <ListItem button component={NavLink} to="/projets" onClick={toggleModal}>
              <ListItemText primary="Projets" />
            </ListItem>
            <ListItem button component={NavLink} to="/experiences" onClick={toggleModal}>
              <ListItemText primary="Expériences" />
            </ListItem>
            {/* Add more links as needed */}
          </List>
        </DialogContent>
      </Dialog>
      <Outlet />
    </>
  );
};

export default Header;