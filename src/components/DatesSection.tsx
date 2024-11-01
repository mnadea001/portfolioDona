import './DatesSection.css'

import { Zoom } from 'react-awesome-reveal'

import { NavLink } from 'react-router-dom'
import DiskSection from './DiskSection'

const DatesSection: React.FC = () => {
  return (
    <>
      <DiskSection />

      <div className="bloc-content">
        <Zoom>
          <NavLink to="/projects" className="title-dates">
            Voir toutes les dates
          </NavLink>
        </Zoom>
      </div>
    </>
  )
}

export default DatesSection
