import SimpleTask from "../../componets/SimpleTask/SimpleTask";
import "./Homepage.scss";

export default function Homepage() {
  return (
    <section className="home">
      <div className="home__width">
        <h2 className="home__title">All Caseworker Tasks</h2>
        <section className="home__list">
          {<SimpleTask task={{ title: "Task 1", status: "pending" }} />}
          <div className="home__listBorder"></div>
        </section>
      </div>
    </section>
  );
}
