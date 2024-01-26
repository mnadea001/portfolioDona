import AccordionItem from './AccordionItem';

interface AccordionListProps {
  projects: {
  title: string;
  content: string;
  imageSrc: string;
  images: { imgPath: string }[]; // Update this line
  description: string;
  languages:  string[]; // Update this line
  number: number;
}[];
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
          images={project.images}
          description={project.description}
          languages={project.languages}
          number={project.number}
        />
      ))}
    </div>
  );
};

export default AccordionList;
