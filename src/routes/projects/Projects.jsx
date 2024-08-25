import "./projects.css";
import ProjectCard from "../../components/projects/ProjectCard";
import data from "../../assets/data";

const Projects = () => {
  return (
    <section className="project-section" id="projects">
      <div className="section-header">
        <h3>Projects</h3>
        <p>This sections entails some of the projects I have completed</p>
      </div>
      <div className="section-content">
        {data.map((project, idx) => {
          return (
            <ProjectCard
              id={idx}
              title={project.title}
              subtitle={project.description}
              url={project.img}
              link={project.link}
              gitLink={project.gitLink}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
