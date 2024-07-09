import "../assets/styles/projectSection.css";

const ProjectSection = ({ title, subtitle, content }) => {
  return (
    <section className="project-section" id="projects">
      <div className="section-header">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div className="section-content">{content}</div>
    </section>
  );
};

export default ProjectSection;
