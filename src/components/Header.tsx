import { useContext, useState } from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import './Header.css';
import IconMenu from '../assets/icons/IconMenu';
import CloseIcon from '../assets/icons/CloseIcon';
import { Button, Dialog, DialogContent } from '@mui/material';
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
        <span style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#333333', paddingTop: '50px'}}>
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
          <List style={{ display: 'flex', textAlign: 'center', flexDirection: 'column'  }}>
            <Zoom>
              <Button style={{ margin: '2px' }} variant="outlined" color="secondary" size="large" component={NavLink} to="/" onClick={toggleModal}>Accueil
              </Button>
            </Zoom>
            <JackInTheBox>
              <Button style={{ margin: '2px' }} variant="outlined" color="primary" size="large" component={NavLink} to="/slider" onClick={toggleModal}>
                Compétences
              </Button>
            </JackInTheBox>
            <Bounce>
            <Button style={{ margin: '2px' }} variant="outlined" size="large" component={NavLink} to="/projects" onClick={toggleModal}>
              Projets
            </Button>
            </Bounce>
            <Slide>
            <Button style={{ margin: '2px' }} variant="outlined" color="secondary" size="large" component={NavLink} to="/experiences" onClick={toggleModal}>
              Expériences
            </Button>
            </Slide>
            <Slide>
            <Button style={{ margin: '2px' }} variant="outlined" color="secondary" size="large" component={NavLink} to="/diplomes" onClick={toggleModal}>
              Diplomes
            </Button>
            </Slide>
          </List>
        </DialogContent>
      </Dialog>
      <Outlet />
    </>
  );
};

export default Header;