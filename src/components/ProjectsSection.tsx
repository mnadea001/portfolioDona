import AccordionList from './AccordionList';
import SliderSection from './SliderSection'; // Import the SliderSection component
import './ProjectsSection.css';

const projectsData = [
  { title: 'Project 1', content: 'Project 1 details...', imageSrc: 'https://images.unsplash.com/photo-1702234577513-151004f4cb44?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { title: 'Project 2', content: 'Project 2 details...' , imageSrc: '' },
  { title: 'Project 3', content: 'Project 1 details...', imageSrc: 'https://images.unsplash.com/photo-1702234577513-151004f4cb44?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { title: 'Project 4', content: 'Project 2 details...' , imageSrc: '' },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="projets-section">
      <SliderSection />
      <section className="projets">
        <AccordionList projects={projectsData} />
      </section>
    </section>
  );
};

export default ProjectsSection;
