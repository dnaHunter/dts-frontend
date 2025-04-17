import "./SimpleTask.scss";
import dayjs from "dayjs";

export default function SimpleTask({ task }) {
  console.log(task);

  return (
    <section className="task">
      <div className="task__width">
        <p className="task__title">{task.title}</p>
        <p className="task__status">Status: {task.status}</p>
        <p className="task__dueDate">
          Due Date: {dayjs(task.due_date).format("DD/MM/YYYY")}
        </p>
      </div>
    </section>
  );
}
