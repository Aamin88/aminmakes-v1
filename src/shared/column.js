import "./columns.css";

const Columns = ({ title, content }) => {
  return (
    <div className="column">
      <h5>{title}:</h5>
      <div className="content">{content}</div>
    </div>
  );
};

export default Columns;
