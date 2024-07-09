import "../assets/styles/links.css";

const Links = ({ link, name, icon, arrow }) => {
  return (
    <a href={link} target="new" className={`links ${name}`}>
      <span>
        {icon}
        {name}
        {arrow}
      </span>
    </a>
  );
};

export default Links;
