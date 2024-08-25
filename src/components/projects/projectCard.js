import "../../assets/styles/project.css";
import Links from "../../shared/lnks";
import { BsArrow90DegRight } from "react-icons/bs";

const ProjectCard = ({ title, subtitle, url, link }) => {
  return (
    <article className="projectCard">
      <div className="content">
        <img src={url} alt={title} />
      </div>
      <div className="header">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <Links
          name={"Preview"}
          link={link}
          arrow={<BsArrow90DegRight className="arrow" />}
        />
        <Links
          name={"Source code"}
          link={link}
          arrow={<BsArrow90DegRight className="arrow" />}
        />
      </div>
    </article>
  );
};

export default ProjectCard;
