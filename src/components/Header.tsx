import { useContext, useState } from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import './Header.css';
import IconMenu from '../assets/icons/IconMenu';
import CloseIcon from '../assets/icons/CloseIcon';
import { Dialog, DialogContent } from '@mui/material';
import IconSunFill from '../assets/icons/IconSunFill';
import IconMoon from '../assets/icons/IconMoon';
import { DarkModeContext, DarkModeContextProps } from '../providers/DarkModeProvider';

import { Zoom, JackInTheBox, Slide, Bounce } from "react-awesome-reveal";

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
      <Dialog open={isModalOpen} onClose={toggleModal} fullScreen >
        <span style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#333333', paddingTop: '50px' }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleModal}
            aria-label="close"
          > FERMER
            <CloseIcon />
          </IconButton>
        </span>
        <DialogContent sx={{ backgroundColor: '#333333' }}>
          <List style={{ display: 'flex', textAlign: 'center', flexDirection: 'column' }}>
            <Zoom>
              <NavLink to="/" className="selected" onClick={toggleModal}>
                Accueil
              </NavLink>
            </Zoom>
            <JackInTheBox>
              <NavLink to="/slider" className="selected" onClick={toggleModal}>
                Compétences
              </NavLink>
            </JackInTheBox>
            <Bounce>
              <NavLink to="/projects" className="selected" onClick={toggleModal}>
                Projets
              </NavLink>
            </Bounce>
            <Slide>
              <NavLink to="/experiences" className="selected" onClick={toggleModal}>
                Expériences
              </NavLink>
            </Slide>
            <Zoom>
              <NavLink to="/diplomes" className="selected" onClick={toggleModal}>
                Diplomes
              </NavLink>
            </Zoom>
          </List>
        </DialogContent>
      </Dialog>
      <Outlet />
    </>
  );
};

export default Header;