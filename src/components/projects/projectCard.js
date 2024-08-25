import "../../assets/styles/project.css";
import Links from "../../shared/lnks";

import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

const ProjectCard = ({ title, subtitle, url, link, gitLink }) => {
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
          arrow={<CiLink className="arrow" />}
        />
        <Links
          name={"Source code"}
          link={gitLink}
          arrow={<FaGithub className="arrow" />}
        />
      </div>
    </article>
  );
};

export default ProjectCard;
