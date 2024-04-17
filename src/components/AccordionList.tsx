import AccordionItem from './AccordionItem';

interface AccordionListProps {
  projects: {
  title: string;
      link: string;
  content: string;
  imageSrc: string;
  images: { imgPath: string }[]; 
  description: string;
  languages:  string[]; 
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
             link={project.link}
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
