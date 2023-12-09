import './ProjectsSection.css'

const ProjectsSection: React.FC = () => {
  return (
    <section className="projets-section">
      <span className="d-flex">
        {/* <img src="assets/PC.png" height="40" alt="" /> */}
        <h2>Projets</h2>
      </span>
      <section className="projets">
        <ul className="list-group list-group-flush">
          {/* List of projects goes here */}
        </ul>
      </section>
    </section>
  );
};

export default ProjectsSection;
