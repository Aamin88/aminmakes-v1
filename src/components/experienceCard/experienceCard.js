import "./experienceCard.css";

const experienceCard = ({ title, subtitle, duration, link, type }) => {
  return (
    <article className="experience-card">
      <div className="content">
        <h3 className="title ">{title}</h3>
        <p className="subtitle ">{subtitle}</p>
        <h6 className="duration">{duration}</h6>
        <div className="footer">
          <span className="type">{type}</span>
          <a href={link} target="new" className="link">
            View
          </a>
        </div>
      </div>
    </article>
  );
};

export default experienceCard;
