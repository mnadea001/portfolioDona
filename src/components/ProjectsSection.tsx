import './ProjectsSection.css'
import AccordionList from './AccordionList';

const projectsData = [
  { title: 'MSPR', content: 'Project 1 details...' },
  { title: 'Séniorissime', content: 'Project 2 details...' },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="projets-section">
      <span className="d-flex">
        {/* <img src="assets/PC.png" height="40" alt="" /> */}
        <h2>Projets</h2>
      </span>
      <section className="projets">
        <AccordionList projects={projectsData} />
      </section>
    </section>
  );
};


export default ProjectsSection;
