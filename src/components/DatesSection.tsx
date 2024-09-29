import './DatesSection.css'

import { Zoom } from 'react-awesome-reveal'

import { NavLink } from 'react-router-dom'
import DiskSection from './DiskSection'

const DatesSection: React.FC = () => {
  return (
    <>
      <div className="dates-box">
        <div className="bloc-content">
          <DiskSection />
        </div>
        <div className="bloc-content">
          {' '}
          <Zoom>
            <NavLink to="/projects" className="title-dates">
              Voir toutes les dates
            </NavLink>
          </Zoom>
        </div>
      </div>
    </>
  )
}

export default DatesSection
