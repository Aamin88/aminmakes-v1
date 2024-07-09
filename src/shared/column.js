const Columns = ({ title, content }) => {
  return (
    <div className="column">
      <h4>{title}:</h4>
      <div className="content">{content}</div>
    </div>
  );
};

export default Columns;
