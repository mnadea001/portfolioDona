import { useState } from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import './Header.css'
import { Dialog, DialogContent } from '@mui/material'
import MenuSharpIcon from '@mui/icons-material/MenuSharp'
import { Zoom, Bounce } from 'react-awesome-reveal'

import { TransitionProps } from '@mui/material/transitions'
import Slide from '@mui/material/Slide'
import React from 'react'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

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
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            width: '50%',
            maxWidth: 'none'
          }
        }}>
        <span className="span-header">
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
