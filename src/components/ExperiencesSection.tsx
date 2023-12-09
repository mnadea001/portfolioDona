import './ExperiencesSection.css'

const ExperiencesSection: React.FC = () => {
  return (
    <section className="experiences-section">
      <span className="d-flex">
        <img src="assets/WORK.png" height="40" alt="" />
        <h2>Expériences</h2>
      </span>
      <div className="experiences">
        {/* Your experiences content goes here */}
      </div>
    </section>
  );
};

export default ExperiencesSection;
