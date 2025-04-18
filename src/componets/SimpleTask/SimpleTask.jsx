import "./SimpleTask.scss";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export default function SimpleTask({ task }) {
  const date = dayjs(task.due_date);
  const formattedDate = date.format("DD/MM/YYYY HH:mm");

  return (
    <section className="task">
      <Link to={`/tasks/${task.id}`} className="task__link">
        <div className="task__width">
          <p className="task__title">{task.title}</p>
          <p className="task__status">Status: {task.status}</p>
          <p className="task__dueDate">Due Date: {formattedDate.toString()}</p>
          {date.isBefore(dayjs(), "day") && (
            <p className="task__overdue">Overdue</p>
          )}
        </div>
      </Link>
    </section>
  );
}
