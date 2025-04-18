import { useEffect, useState } from "react";
import "./DetailedTask.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

export default function DetailedTask() {
  const [task, setTask] = useState(null);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  async function deleteTask(event) {
    const res = await axios.delete(`${BACKEND_URL}/${id}`);
    if (res.status == 200) {
      navigate("/");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const status = event.target.status.value;
    console.log(status);

    if (!status) {
      event.target.status.classList.add("dtask__status--error");
      return;
    } else {
      event.target.status.classList.remove("dtask__status--error");
    }

    const post = {
      status,
    };

    const res = await axios.patch(`${BACKEND_URL}/status/${id}`, post);
  }

  async function getTask() {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/tasks/${id}`);

      setTask(data);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getTask();
  }, []);

  if (error) {
    console.error(error);
    return <p>{error.messsage}</p>;
  }

  if (!task) {
    return <p>Loading...</p>;
  }

  return (
    <section className="dtask">
      <div className="dtask__width">
        <h2 className="dtask__title">{task.title}</h2>
        {task.description && task.description != "0" && (
          <>
            <p className="dtask__descTitle">Description</p>
            <p className="dtask__desc">{task.description}</p>
          </>
        )}
        <form onSubmit={handleSubmit} className="dtask__statusForm">
          <label htmlFor="status" className="dtask__label">
            Status
          </label>
          <input
            type="text"
            id="status"
            name="status"
            className="dtask__status"
            defaultValue={task.status}
          />
          <button className="dtask__button">Update Status</button>
        </form>
        <p className="dtask__dueDate">
          Due Date: {dayjs(task.due_date).format("DD/MM/YYYY")}
        </p>
        <p onClick={deleteTask} className="dtask__delete">
          Delete Task
        </p>
      </div>
    </section>
  );
}
