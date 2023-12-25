import { useContext, useState } from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import './Header.css';
import IconMenu from '../assets/icons/IconMenu';
import CloseIcon from '../assets/icons/CloseIcon';
import { Button, Dialog, DialogContent } from '@mui/material';
import ByeComponent from './ByeComponent';
import IconSunFill from '../assets/icons/IconSunFill';
import IconMoon from '../assets/icons/IconMoon';
import { DarkModeContext, DarkModeContextProps } from '../providers/DarkModeProvider';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext<DarkModeContextProps>(DarkModeContext);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="icons">
        <button onClick={toggleDarkMode} color="red">
          {darkMode ? <IconSunFill /> : <IconMoon />}
        </button>
        <h3>PORTFOLIO MATHILDE NADEAU</h3>
        <IconButton onClick={toggleModal} style={{ color: '#333333' }}>
          <IconMenu />
        </IconButton>
      </div>
      <Dialog open={isModalOpen} onClose={toggleModal} fullScreen>
        <IconButton edge="end" color="inherit" onClick={toggleModal} aria-label="close">
          <CloseIcon />  FERMER
        </IconButton>
        <ByeComponent />
        <DialogContent>
          <List style={{ display: 'flex', justifyContent: 'center' }}>
            <Button component={NavLink} to="/" onClick={toggleModal}>Home
            </Button>
            <Button component={NavLink} to="/slider" onClick={toggleModal}>
              Compétences
            </Button>
            <Button component={NavLink} to="/projects" onClick={toggleModal}>
              Projets
            </Button>
            <Button component={NavLink} to="/experiences" onClick={toggleModal}>
              Expériences
            </Button>
          </List>
        </DialogContent>
      </Dialog>
      <Outlet />
    </>
  );
};

export default Header;