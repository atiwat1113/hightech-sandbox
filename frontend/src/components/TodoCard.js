import "./TodoCard.css";

const TodoCard = ({
  id,
  title,
  isCompleted,
  dueDate,
  handleCheckBoxChange,
  handleDelete,
}) => {
  return (
    <div id={id} className="card">
      <div>
        <h3 className="card-title">{title}</h3>
        <span className="card-text">{new Date(dueDate).toDateString()}</span>
      </div>

      <div className="card-actions">
        <input
          className="checkbox"
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => {
            e.preventDefault();
            handleCheckBoxChange(id, e.target.checked);
          }}
        />
        <button
          className="primary-button"
          onClick={(e) => {
            e.preventDefault();
            handleDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
