import "./NewTodo.css";

const NewTodo = ({ handleSubmit }) => {
  return (
    <div className="Container">
      <h2>Create a new Todo</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="form"
      >
        <div className="form-control">
          <label htmlFor="title" className="label">
            Title
          </label>
          <input type="text" id="title" name="title" className="my-input" />
        </div>
        <div className="form-control">
          <label htmlFor="dueDate" className="label">
            Due Date
          </label>
          <input type="date" id="dueDate" name="dueDate" className="my-input" />
        </div>

        <button type="submit" className="submit-button ">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
