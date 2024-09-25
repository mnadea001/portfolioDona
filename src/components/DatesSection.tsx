import './DatesSection.css'

import { Zoom } from 'react-awesome-reveal'
import { useContext } from 'react'
import { DarkModeContext } from '../providers/DarkModeProvider'
import { NavLink } from 'react-router-dom'

const DatesSection: React.FC = () => {
  const darkModeContext = useContext(DarkModeContext)
  const darkMode = darkModeContext?.darkMode || false
  const textStyle: React.CSSProperties = {
    color: darkMode === true ? '#FFFFFF' : '#000000',
    fontFamily: "Avenir", 
    fontSize: '3em'

  };


  return (
    <>
      <div className="dates-section">
        <Zoom>
        <NavLink to="/projects" style={textStyle} className='title-dates' >
          Voir toutes les dates
        </NavLink>
        </Zoom>

      </div>
    </>
  )
}

export default DatesSection
