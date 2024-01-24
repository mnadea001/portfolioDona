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
        <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
          <li>
          <a
              href="#"
              className="flex items-center gap-1 hover:text-neutral-400 transition-all"
            />
              </li>
              </ul>
      <IconButton
              edge="start"
              color="inherit"
              onClick={toggleModal}
              aria-label="close"
            > FERMER
              <CloseIcon />
            </IconButton>
            </span>
        <DialogContent  sx={{ backgroundColor: '#BEA4C7' }}>
          <List style={{ display: 'flex', justifyContent: 'center' }}>
            <Button style={{ margin: '2px' }} variant="outlined" color="secondary" size="large" component={NavLink} to="/" onClick={toggleModal}>Accueil
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