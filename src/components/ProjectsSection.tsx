import AccordionList from './AccordionList'
import './ProjectsSection.css'
import { useNavigate } from 'react-router'
import dates2024 from '../assets/data/projects2024.js'
import dates2023 from '../assets/data/projects2023.js'
import dates2022 from '../assets/data/projects2022.js'
import dates2021 from '../assets/data/projects2021.js'
import dates2020 from '../assets/data/projects2020.js'
import dates2025 from '../assets/data/projects2025.js'

import dates from '../assets/images/dates.png'
const ProjectsSection: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <button className="retour-btn" onClick={() => navigate(-1)}>
        <span>retour</span>
      </button>
      <section className="projets-content">
        <section className="projets">
        <img src={dates} style={{ maxWidth: '100%', height: 'auto', maxHeight: '500px', marginTop: '50px',marginBottom: '50px', marginLeft: 'auto' }} />

          <p className="dates-title">Dates</p>
        </section>
        <p className="year-title">2025</p>
        <AccordionList projects={dates2025} />
        <hr />
        <p className="year-title">2024</p>
        <AccordionList projects={dates2024} />
        <hr />
        <p className="year-title">2023</p>
        <AccordionList projects={dates2023} />
        <hr />
        <p className="year-title">2022</p>

        <AccordionList projects={dates2022} />
        <hr />
        <p className="year-title">2021</p>
        <p>
          * <em>année covid / soirées privées</em>
        </p>
        <AccordionList projects={dates2021} />
        <hr />
        <p className="year-title">2020</p>
        <p>
          * <em>année covid / soirées privées</em>
        </p>
        <AccordionList projects={dates2020} />
      </section>
    </>
  )
}

export default ProjectsSection
