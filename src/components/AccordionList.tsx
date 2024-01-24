import AccordionItem from './AccordionItem';

interface AccordionListProps {
  projects: { title: string; content: string; imageSrc: string, description: string,languages: [string],
    number: number }[];
}

const AccordionList: React.FC<AccordionListProps> = ({ projects }) => {


  return (
    <div>

      {projects.map((project, index) => (
        <AccordionItem
          key={index}
          title={project.title}
          content={project.content}
          imageSrc={project.imageSrc}
          description={project.description}
          languages={project.languages}
          number={project.number}
        />
      ))}
    </div>
  );
};

export default AccordionList;
