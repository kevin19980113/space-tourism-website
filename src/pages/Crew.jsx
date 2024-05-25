import Carousel from "../components/Carousel";
import { data } from "../data.js";
import classes from "./Crew.module.css";

export default function Crew() {
  return (
    <main className={classes["crew-main-container"]}>
      <h4>
        <span className={classes.number}>02</span> MEET YOUR CREW
      </h4>
      <section className={classes["crew-content"]}>
        <Carousel crews={data.crew} />
      </section>
    </main>
  );
}
