import AccordionItem from './AccordionItem'

interface AccordionListProps {
  projects: {
    title: string
    date: string
    link: string
    imageSrc: string
    images: { imgPath: string }[]
    lieu: string
    artistes: string[]
  }[]
}

const AccordionList: React.FC<AccordionListProps> = ({ projects }) => {
  return (
    <div>
      {projects.map((project, index) => (
        <AccordionItem
          key={index}
          title={project.title}
          link={project.link}
          date={project.date}
          imageSrc={project.imageSrc}
          images={project.images}
          lieu={project.lieu}
          artistes={project.artistes}
        />
      ))}
    </div>
  )
}

export default AccordionList
