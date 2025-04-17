import "./NewTask.scss";

export default function NewTask() {
  return (
    <section className="newTask">
      <div className="newTask__width">
        <h2 className="newTask__title">Create a new Task</h2>
        <form className="newTask__form">
          <label htmlFor="title" className="newTask__label">
            Task Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="newTask__input"
          />

          <label htmlFor="desc" className="newTask__label">
            Task Description (Optional)
          </label>
          <textarea name="desc" id="desc" className="newTask__area"></textarea>

          <label htmlFor="status" className="newTask__label">
            Task Status
          </label>
          <input
            type="text"
            id="status"
            name="status"
            className="newTask__input"
          />

          <label htmlFor="date" className="newTask__label">
            Task Due Date
          </label>

          <input type="date" name="date" id="date" className="newTask__date" />
          <button className="newTask__button">Submit New Task</button>
        </form>
      </div>
    </section>
  );
}
