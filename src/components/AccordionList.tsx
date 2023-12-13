// AccordionList.tsx
import React from 'react';
import AccordionItem from './AccordionItem';

interface AccordionListProps {
  projects: { title: string; content: string; imageSrc: string }[];
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
        />
      ))}
    </div>
  );
};

export default AccordionList;
