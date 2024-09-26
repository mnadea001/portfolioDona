import AccordionList from './AccordionList'
import './ProjectsSection.css'
import { JackInTheBox } from 'react-awesome-reveal'

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
          <p className="dates-title">Dates</p>
        </section>
        <JackInTheBox>
          <p className="year-title">2024</p>
        </JackInTheBox>
        <AccordionList projects={dates2024} />
        <hr />
        <JackInTheBox>
          <p className="year-title">2023</p>
        </JackInTheBox>
        <AccordionList projects={dates2023} />
        <hr />
        <JackInTheBox>
          <p className="year-title">2022</p>
        </JackInTheBox>

        <AccordionList projects={dates2022} />
        <hr />
        <JackInTheBox>
          <p className="year-title">2021</p>
        </JackInTheBox>
        <p>
          * <em>année covid / soirées privées</em>
        </p>
        <AccordionList projects={dates2021} />
        <hr />
        <JackInTheBox>
          <p className="year-title">2020</p>
        </JackInTheBox>
        <p>
          * <em>année covid / soirées privées</em>
        </p>
        <AccordionList projects={dates2020} />
      </section>
    </>
  )
}

export default ProjectsSection
