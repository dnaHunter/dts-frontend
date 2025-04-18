import axios from "axios";
import SimpleTask from "../../componets/SimpleTask/SimpleTask";
import "./Homepage.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

export default function Homepage() {
  const [tasks, setTasks] = useState(null);
  const [error, setError] = useState(false);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  async function getTasks() {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/tasks`);

      //Sort the tasks into date order earliest first
      data.sort((a, b) => dayjs(a.due_date).unix() - dayjs(b.due_date).unix());

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
        <div className="home__top">
          <div className="home__textSet">
            <h2 className="home__title">All Caseworker Tasks</h2>
            <p className="home__subtitle">
              For more details or to update a task click on the task
            </p>
          </div>
          <Link to={"/tasks/new"}>
            <div className="home__button">
              <p className="home__buttonText">Create new task</p>
            </div>
          </Link>
        </div>
        <section className="home__list">
          {tasks.map((task) => (
            <SimpleTask task={task} key={task.id} />
          ))}
        </section>
        <div className="home__listBorder"></div>
      </div>
    </section>
  );
}
