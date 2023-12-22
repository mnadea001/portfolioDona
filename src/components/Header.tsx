import { useState } from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './Header.css';
import IconMenu from '../assets/icons/IconMenu';
import CloseIcon from '../assets/icons/CloseIcon';
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
          <List style={{display:'flex'}}>
          <ListItem component={NavLink} to="/" onClick={toggleModal}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem component={NavLink} to="/slider" onClick={toggleModal}>
              <ListItemText primary="Compétences" />
            </ListItem>
            <ListItem component={NavLink} to="/projects" onClick={toggleModal}>
              <ListItemText primary="Projets" />
            </ListItem>
            <ListItem component={NavLink} to="/experiences" onClick={toggleModal}>
              <ListItemText primary="Expériences" />
            </ListItem>
            <ListItem component={NavLink} to="/NotFound" onClick={toggleModal}>
              <ListItemText primary="Not Found" />
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