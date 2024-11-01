import { useState } from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import './Header.css'
import { Dialog, DialogContent } from '@mui/material'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Zoom, Bounce } from 'react-awesome-reveal'

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  // const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

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
        <h3 className="header-title">MATILDA DONA</h3>
        <IconButton onClick={toggleModal}>
          <MenuSharpIcon />
        </IconButton>
      </div>
      <Dialog open={isModalOpen} onClose={toggleModal} fullScreen>
        <span
          className="span-header"
          style={{
            display: 'flex',
            justifyContent: 'center',
            color: 'black',
            paddingTop: '50px'
          }}>
          <IconButton edge="start" color="inherit" onClick={toggleModal} aria-label="close" className="close-btn">
            {' '}
            FERMER
          </IconButton>
        </span>
        <DialogContent className="span-dialog">
          <List style={{ display: 'flex', textAlign: 'center', flexDirection: 'column' }}>
            <Zoom>
              <NavLink to="/" className="selected-dark" onClick={toggleModal}>
                Accueil
              </NavLink>
            </Zoom>
            {/* <Bounce>
          <NavLink to="/about" className="selected-dark" onClick={toggleModal}>
            Bio
          </NavLink>
        </Bounce> */}
            <Bounce>
              <NavLink to="/projects" className="selected-dark" onClick={toggleModal}>
                Dates
              </NavLink>
            </Bounce>
          </List>
        </DialogContent>
      </Dialog>
      <Outlet />
    </>
  )
}

export default Header
