import AccordionList from './AccordionList'
import './ProjectsSection.css'
import { useNavigate } from 'react-router'
import dates2024 from '../assets/data/projects2024'
import dates2023 from '../assets/data/projects2023'
import dates2022 from '../assets/data/projects2022'
import dates2021 from '../assets/data/projects2021'
import dates2020 from '../assets/data/projects2020'
import dates2025 from '../assets/data/projects2025'
const ProjectsSection: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <button className="retour-btn" onClick={() => navigate(-1)}>
        <span>retour</span>
      </button>
      <section className="projets-content year-box-pink">

        <div className="year-box-pink">
        <section className="projets">
          <h1>Dates</h1>   
        </section>
        <p className="year-title">2025</p>
        <AccordionList projects={dates2025} />
        </div>
   
        <div className="year-box">
        <p className="year-title">2024</p>
        <AccordionList projects={dates2024} />
        </div>
        <div className="year-box-pink">
        <p className="year-title">2023</p>
        <AccordionList projects={dates2023} />
        </div>
        <div className="year-box">
        <p className="year-title">2022</p>

        <AccordionList projects={dates2022} />
        </div>
        <div className="year-box-pink">
        <p className="year-title">2021</p>
        <p>
          * <em>année covid / soirées privées</em>
        </p>
        <AccordionList projects={dates2021} />
        </div>
        <div className="year-box">
        <p className="year-title">2020</p>
        <p>
          * <em>année covid / soirées privées</em>
        </p>
        <AccordionList projects={dates2020} />
        </div>
      </section>
    </>
  )
}

export default ProjectsSection
