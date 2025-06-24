import AccordionItem from './AccordionItem'
import './AccordionList.css' 
import { Project } from '../assets/data/projects';


interface AccordionListProps {
  projects: Project[];
}

const AccordionList: React.FC<AccordionListProps> = ({ projects }) => {
  return (
    <div className="accordion-list-container">
      {projects.map((project) => (
        <AccordionItem
        key={project.title}
          title={project.title}
          date={project.date}
          imageSrc={project.imageSrc}
          lieu={project.lieu}
     
        />
      ))}
    </div>
  )
}

export default AccordionList
