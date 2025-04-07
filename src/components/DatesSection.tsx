import './DatesSection.css'

import { Zoom } from 'react-awesome-reveal'

import { NavLink } from 'react-router-dom'
import dates from '../assets/images/dates.png'
import AccordionList from './AccordionList'
import projectsnext2025 from '../assets/data/projectsnext2025'
const DatesSection: React.FC = () => {
  return (
 
      <div className="bloc-content">

                <Zoom>
                  <h1>Dates</h1>
     </Zoom>
 <h1 className="next-dates">   Prochaines dates</h1>

 <AccordionList projects={projectsnext2025} />
          <NavLink to="/projects" className="title-dates">
            Voir toutes les dates
          </NavLink>
   
      </div>
    
  )
}

export default DatesSection
