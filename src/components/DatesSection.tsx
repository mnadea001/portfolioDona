import './DatesSection.css'

import { Zoom } from 'react-awesome-reveal'
import { useContext } from 'react'
import { DarkModeContext } from '../providers/DarkModeProvider'
import { NavLink } from 'react-router-dom';

const DatesSection: React.FC = () => {
  const darkModeContext = useContext(DarkModeContext)
  const darkMode = darkModeContext?.darkMode || false
  const textStyle: React.CSSProperties = {
    color: darkMode === true ? '#C996FF' : '#FFE7C2'
  }

  const isMobile = window.innerWidth <= 768

  return (
    <>
      <div className="dates-section">
        <Zoom>
          <p className={isMobile ? 'not-centered title-dates' : 'title-dates'} style={textStyle}>
            Dates
          </p>
        </Zoom>
        <NavLink to="/projects" className={darkMode ? 'selected-dark' : 'selected'}>
            Voir toutes les dates
          </NavLink>
      </div>
    </>
  )
}

export default DatesSection
