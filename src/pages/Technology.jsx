import { data } from "../data.js";
import { useState } from "react";
import classes from "./Technology.module.css";

export default function Technology() {
  const [technologyIndex, setTechnologyIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  function handleClickStep(stepNumber) {
    setAnimate(true);
    setTechnologyIndex(stepNumber);
    setTimeout(() => setAnimate(false), 400);
  }

  return (
    <main className={classes["technology-main-container"]}>
      <h4 className={classes["technology-title"]}>
        <span className={classes.number}>03</span> SPACE LAUNCH 101
      </h4>
      <section className={classes["technology-content"]}>
        <div className={classes["technology-info-wrapper"]}>
          <div className={classes["technology-step"]}>
            <button
              className={`${classes["technology-step-number"]} ${
                technologyIndex >= 0 ? classes["step-active"] : ""
              }`}
              onClick={() => handleClickStep(0)}
            >
              1
            </button>
            <div className={classes["step-line"]}>
              <div
                className={`${classes["progress-bar"]} ${
                  technologyIndex >= 1 ? classes["fill"] : ""
                }`}
              ></div>
            </div>
            <button
              className={`${classes["technology-step-number"]} ${
                technologyIndex >= 1 ? classes["step-active"] : ""
              }`}
              onClick={() => handleClickStep(1)}
            >
              2
            </button>
            <div className={classes["step-line"]}>
              <div
                className={`${classes["progress-bar"]} ${
                  technologyIndex >= 2 ? classes["fill"] : ""
                }`}
              ></div>
            </div>
            <button
              className={`${classes["technology-step-number"]} ${
                technologyIndex === 2 ? classes["step-active"] : ""
              }`}
              onClick={() => handleClickStep(2)}
            >
              3
            </button>
          </div>
          <div
            className={`${classes["technology-description"]} ${
              animate ? classes["fade-in"] : ""
            }`}
          >
            <p>THE TECHNOLOGY...</p>
            <h1>{data.technology[technologyIndex].name.toUpperCase()}</h1>
            <p>{data.technology[technologyIndex].description}</p>
          </div>
        </div>
        <figure className={classes["technology-img-wrapper"]}>
          <img
            src={data.technology[technologyIndex].images.portrait}
            alt={data.technology[technologyIndex].name}
            className={`${classes["technology-img"]} ${
              animate ? classes["fade-in"] : ""
            }`}
          />
        </figure>
      </section>
    </main>
  );
}
