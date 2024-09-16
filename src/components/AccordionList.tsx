import AccordionItem from './AccordionItem'

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
    <div>
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
