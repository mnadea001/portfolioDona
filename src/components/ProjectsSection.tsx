import AccordionList from './AccordionList'
import './ProjectsSection.css'
import { Zoom } from 'react-awesome-reveal'
// import { useContext } from 'react'
// import { DarkModeContext } from '../providers/DarkModeProvider'

import dates2024 from '../assets/data/projects2024.js'

const ProjectsSection: React.FC = () => {


  return (
    <>
      <section className="projets-content">
        <section className="projets">
          <Zoom>
            <h1>
              Dates
            </h1>
          </Zoom>    
          </section>
          <h1>
              2024
            </h1>
          <AccordionList projects={dates2024} />
    
      </section>
    </>
  )
}

export default ProjectsSection
