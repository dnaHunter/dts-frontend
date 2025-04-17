import axios from "axios";
import SimpleTask from "../../componets/SimpleTask/SimpleTask";
import "./Homepage.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [tasks, setTasks] = useState(null);
  const [error, setError] = useState(false);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  async function getTasks() {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/tasks`);

      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!tasks) {
    return <p>Loading...</p>;
  }

  return (
    <section className="home">
      <div className="home__width">
        <h2 className="home__title">All Caseworker Tasks</h2>
        <p className="home__subtitle">
          Click on a case for more details or to update it.
        </p>
        <Link to={"/tasks/new"}>
          <p className="home__button">Create new task</p>
        </Link>
        <section className="home__list">
          {tasks.map((task) => (
            <SimpleTask task={task} key={task.id} />
          ))}
          <div className="home__listBorder"></div>
        </section>
      </div>
    </section>
  );
}
