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
        <button onClick={toggleDarkMode}>
          {darkMode ? <IconSunFill /> : <IconMoon />}
        </button>
        <h3>PORTFOLIO MATHILDE NADEAU</h3>
        <IconButton onClick={toggleModal} >
          <IconMenu className={darkMode ? 'menu' : 'menudark'} />
        </IconButton>
      </div>
      <Dialog open={isModalOpen} onClose={toggleModal} fullScreen>
        <span style={{display: 'flex', justifyContent: 'center' }}>
      <IconButton
              edge="start"
              color="inherit"
              onClick={toggleModal}
              aria-label="close"
            > FERMER
              <CloseIcon />
            </IconButton>
            </span>
        {/* <IconButton edge="end" onClick={toggleModal} aria-label="close">
          <CloseIcon /> 
        </IconButton> */}
        <ByeComponent />
        <DialogContent  sx={{ backgroundColor: '#BEA4C7' }}>
          <List style={{ display: 'flex', justifyContent: 'center' }}>
            <Button style={{ margin: '2px' }} variant="outlined" color="secondary" size="large" component={NavLink} to="/" onClick={toggleModal}>Home
            </Button>
            <Button style={{ margin: '2px' }} variant="outlined" color="secondary" size="large" component={NavLink} to="/slider" onClick={toggleModal}>
              Compétences
            </Button>
            <Button style={{ margin: '2px' }}  variant="outlined" color="secondary" size="large" component={NavLink} to="/projects" onClick={toggleModal}>
              Projets
            </Button>
            <Button style={{ margin: '2px' }}  variant="outlined" color="secondary" size="large" component={NavLink} to="/experiences" onClick={toggleModal}>
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