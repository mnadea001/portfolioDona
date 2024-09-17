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

import { Zoom, Bounce } from "react-awesome-reveal";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext<DarkModeContextProps>(DarkModeContext);
  // const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <>
      <div className="icons">
        <button className="btn-dark-mode" onClick={toggleDarkMode}>
          {darkMode ? <IconSunFill /> : <IconMoon />}
        </button>
        <h3 className={darkMode ? 'header-title-dark' : 'header-title'}>MATILDA DONA</h3>
        <IconButton onClick={toggleModal} >
          <IconMenu className={darkMode ? 'menu' : 'menudark'} />
        </IconButton>
      </div>
      <Dialog open={isModalOpen} onClose={toggleModal} fullScreen >
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: darkMode ? '#333333' : '#D5C5B6',
            color: '#fff',
            paddingTop: '50px'
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleModal}
            aria-label="close"
          > FERMER
            <CloseIcon
              style={{ paddingLeft: '15px' }} />
          </IconButton>
        </span>
        <DialogContent sx={{   backgroundColor: darkMode ? '#333333' : '#D5C5B6', }}>
           <List style={{ display: 'flex', textAlign: 'center', flexDirection: 'column' }}>
        <Zoom>
          <NavLink to="/" className={darkMode ? 'selected-dark' : 'selected'} onClick={toggleModal}>
            Accueil
          </NavLink>
        </Zoom>
        <Bounce>
          <NavLink to="/about" className={darkMode ? 'selected-dark' : 'selected'} onClick={toggleModal}>
            Bio
          </NavLink>
        </Bounce>
        <Bounce>
          <NavLink to="/projects" className={darkMode ? 'selected-dark' : 'selected'} onClick={toggleModal}>
            Dates
          </NavLink>
        </Bounce>
        {/* <Slide>
          <NavLink to={isMobile ? "/experiences-mobile" : "/experiences"} className={darkMode ? 'selected-dark' : 'selected'} onClick={toggleModal}>
            Expériences
          </NavLink>
        </Slide> */}

      </List>
        </DialogContent>
      </Dialog>
      <Outlet />
    </>
  );
};

export default Header;