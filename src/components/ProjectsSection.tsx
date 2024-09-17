import AccordionList from './AccordionList'
import './ProjectsSection.css'
import { Zoom } from 'react-awesome-reveal'
// import { useContext } from 'react'
// import { DarkModeContext } from '../providers/DarkModeProvider'

import dates2024 from '../assets/data/projects2024.js'
import dates2023 from '../assets/data/projects2023.js'
import dates2022 from '../assets/data/projects2022.js'
import dates2021 from '../assets/data/projects2021.js'
import dates2020 from '../assets/data/projects2020.js'


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
          <h1>
              2023
            </h1>
          <AccordionList projects={dates2023} />
          <h1>
              2022
            </h1>
          <AccordionList projects={dates2022} />
          <h1>
              2021
            </h1>
          <AccordionList projects={dates2021} />
          <h1>
              2020
            </h1>
          <AccordionList projects={dates2020} />
      </section>
    </>
  )
}

export default ProjectsSection
