import "./SimpleTask.scss";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export default function SimpleTask({ task }) {
  return (
    <section className="task">
      <Link to={`/tasks/${task.id}`} className="task__link">
        <div className="task__width">
          <p className="task__title">{task.title}</p>
          <p className="task__status">Status: {task.status}</p>
          <p className="task__dueDate">
            Due Date: {dayjs(task.due_date).format("DD/MM/YYYY")}
          </p>
        </div>
      </Link>
    </section>
  );
}
