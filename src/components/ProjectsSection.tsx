import AccordionList from './AccordionList'
import './ProjectsSection.css'
import { Zoom } from 'react-awesome-reveal'
import { useContext } from 'react'
import { DarkModeContext } from '../providers/DarkModeProvider'

import dates2024 from '../assets/data/projects2024.js'
import dates2023 from '../assets/data/projects2023.js'
import dates2022 from '../assets/data/projects2022.js'
import dates2021 from '../assets/data/projects2021.js'
import dates2020 from '../assets/data/projects2020.js'

const ProjectsSection: React.FC = () => {
  const darkModeContext = useContext(DarkModeContext)
  const darkMode = darkModeContext?.darkMode || false
  const textStyle: React.CSSProperties = {
    color: darkMode === true ? '#FFFFFF' : '#000000',
    fontFamily: 'Bagel Fat One',
    fontSize: '3em'
  }

  return (
    <>
      <section className="projets-content">
        <section className="projets">
          <p className="dates-title">Dates</p>
        </section>
        <Zoom>
          <p style={textStyle}>2024</p>
        </Zoom>
        <AccordionList projects={dates2024} />
        <hr />
        <Zoom>
          <p style={textStyle}>2023</p>
        </Zoom>
        <AccordionList projects={dates2023} />
        <hr />
        <Zoom>
          <p style={textStyle}>2022</p>
        </Zoom>

        <AccordionList projects={dates2022} />
        <hr />
        <Zoom>
          <p style={textStyle}>2021</p>
        </Zoom>
        <p>
          * <em>année covid / soirées privées</em>
        </p>
        <AccordionList projects={dates2021} />
        <hr />
        <Zoom>
          <p style={textStyle}>2020</p>
        </Zoom>
        <p>
          * <em>année covid / soirées privées</em>
        </p>
        <AccordionList projects={dates2020} />
      </section>
    </>
  )
}

export default ProjectsSection
