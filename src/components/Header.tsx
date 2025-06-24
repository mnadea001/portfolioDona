import { Outlet, NavLink } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import MenuSharpIcon from '@mui/icons-material/MenuSharp'
import { Zoom, Bounce } from 'react-awesome-reveal'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import './Header.css'
import React, { useState } from 'react'

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => setIsModalOpen(!isModalOpen)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <div className="icons">
        <h3 className="header-title">MATILDA DONA</h3>
        <IconButton onClick={toggleModal}>
          <MenuSharpIcon />
        </IconButton>
      </div>

      <Dialog
        open={isModalOpen}
        onClose={toggleModal}
        fullScreen={isMobile}
        PaperProps={{
          sx: {
            width: isMobile ? '100%' : '50%',
            maxWidth: 'none',
          }
        }}
      >
        <DialogContent className="span-dialog">
          <span className="span-header">
            <IconButton edge="start" color="inherit" onClick={toggleModal} aria-label="close" className="close-btn">
              FERMER
            </IconButton>
          </span>
          <List sx={{ display: 'flex', textAlign: 'center', flexDirection: 'column' }}>
            <Zoom>
              <NavLink to="/" className="selected-dark" onClick={toggleModal}>
                Accueil
              </NavLink>
            </Zoom>
            <Bounce>
              <NavLink to="/dates" className="selected-dark" onClick={toggleModal}>
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
