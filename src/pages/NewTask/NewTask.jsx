import axios from "axios";
import "./NewTask.scss";
import { useNavigate } from "react-router-dom";

export default function NewTask() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  let navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    let valid = true;

    const title = event.target.title.value;
    const desc = event.target.desc.value;
    const status = event.target.status.value;
    const date = event.target.date.value;

    if (!title) {
      event.target.title.classList.add("newTask__input--error");
      valid = false;
    } else {
      event.target.title.classList.remove("newTask__input--error");
    }

    if (!status) {
      event.target.status.classList.add("newTask__input--error");
      valid = false;
    } else {
      event.target.status.classList.remove("newTask__input--error");
    }

    if (!date) {
      event.target.date.classList.add("newTask__input--error");
      valid = false;
    } else {
      event.target.title.classList.remove("newTask__input--error");
    }

    if (!valid) {
      return;
    }

    const post = {
      title,
      description: desc,
      status,
      due_date: date,
    };

    const res = await axios.post(`${BACKEND_URL}/tasks`, post);

    navigate("/");
    return;
  }

  return (
    <section className="newTask">
      <div className="newTask__width">
        <h2 className="newTask__title">Create a new Task</h2>
        <form onSubmit={handleSubmit} className="newTask__form">
          <div className="newTask__pair">
            <label htmlFor="title" className="newTask__label">
              Task Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="newTask__input"
            />
          </div>
          <div className="newTask__pair">
            <label htmlFor="desc" className="newTask__label newTask__label--slim">
              Task Description (Optional)
            </label>
            <textarea
              name="desc"
              id="desc"
              className="newTask__area"
            ></textarea>
          </div>
          <div className="newTask__pair">
            <label htmlFor="status" className="newTask__label">
              Task Status
            </label>
            <input
              type="text"
              id="status"
              name="status"
              className="newTask__input"
            />
          </div>
          <div className="newTask__pair">
            <label htmlFor="date" className="newTask__label">
              Task Due Date
            </label>

            <input
              type="date"
              name="date"
              id="date"
              className="newTask__date"
            />
          </div>
          <button className="newTask__button">Submit New Task</button>
        </form>
      </div>
    </section>
  );
}
