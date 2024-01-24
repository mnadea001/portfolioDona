// import { Accordion } from '@mui/material';
import AccordionItem from './AccordionItem';
// import { AccordionItemProps } from './AccordionItem';
// interface AccordionListProps {
//   projects: { title: string; content: string; imageSrc: string, description: string,languages: [string],
//     number: number }[];
// }

interface AccordionListProps {
  projects: { title: string; content: string; imageSrc: string,images: [string], description: string,languages: [string],
    number: number }[];
}
// const AccordionList: React.FC<AccordionListProps> = ({ projects }) => {
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
