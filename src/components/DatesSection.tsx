import './DatesSection.css'

import { Zoom } from 'react-awesome-reveal'

import { NavLink } from 'react-router-dom'

const DatesSection: React.FC = () => {




  return (
    <>
      <div className='dates-box'>
        <Zoom>
        <NavLink to="/projects" className='title-dates' >
          Voir toutes les dates
        </NavLink>
        </Zoom>

      </div>
    </>
  )
}

export default DatesSection
