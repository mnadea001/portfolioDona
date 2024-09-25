import AccordionItem from './AccordionItem'
import './AccordionList.css' // Ajouter un fichier CSS pour les styles

interface AccordionListProps {
  projects: {
    title: string
    date: string
    imageSrc: string
    lieu: string
  }[]
}

const AccordionList: React.FC<AccordionListProps> = ({ projects }) => {
  return (
    <div className="accordion-list-container">
      {projects.map((project, index) => (
        <AccordionItem
          key={index}
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
