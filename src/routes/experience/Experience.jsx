import "./section.css";
import ExperienceCard from "../../components/experienceCard/experienceCard";

const experiences = (
  <>
    <ExperienceCard
      title={"Freelance Developer"}
      subtitle={"Web Developer"}
      duration={"Current"}
      type={"Freelance"}
      link={"https://renewed-solar.vercel.app/"}
    />
    <ExperienceCard
      title={"Bootcamp HyperionDev"}
      subtitle={"Three month intensive coding bootcamp"}
      duration={"Dec. 2022 - Mar. 2023"}
      type={"Full-time"}
      link={"https://www.hyperiondev.com/portfolio/113792/"}
    />
  </>
);

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="title">
        <h3>Experience</h3>
      </div>
      <div className="exp-content">{experiences}</div>
    </section>
  );
};

export default Experience;
