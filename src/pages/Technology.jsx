import { data } from "../data.js";
import { useState } from "react";

export default function Technology() {
  const [technologyIndex, setTechnologyIndex] = useState(0);

  function handleClickStep(stepNumber) {
    setTechnologyIndex(stepNumber);
  }

  return (
    <main className="technology-main-container">
      <h4 className="technology-title">
        <span className="number">03</span> SPACE LAUNCH 101
      </h4>
      <section className="technology-content">
        <div className="technology-info-wrapper">
          <div className="technology-step">
            <button
              className={`technology-step-number ${
                technologyIndex >= 0 ? "step-active " : ""
              }`}
              onClick={() => handleClickStep(0)}
            >
              1
            </button>
            <div className="step-line">
              <div
                className={`progress-bar ${technologyIndex >= 1 ? "fill" : ""}`}
              ></div>
            </div>
            <button
              className={`technology-step-number ${
                technologyIndex >= 1 ? "step-active " : ""
              }`}
              onClick={() => handleClickStep(1)}
            >
              2
            </button>
            <div className="step-line">
              <div
                className={`progress-bar ${technologyIndex >= 2 ? "fill" : ""}`}
              ></div>
            </div>
            <button
              className={`technology-step-number ${
                technologyIndex === 2 ? "step-active " : ""
              }`}
              onClick={() => handleClickStep(2)}
            >
              3
            </button>
          </div>
          <div
            className="technology-description"
            key={data.technology[technologyIndex].name}
          >
            <p>THE TECHNOLOGY...</p>
            <h1>{data.technology[technologyIndex].name.toUpperCase()}</h1>
            <p>{data.technology[technologyIndex].description}</p>
          </div>
        </div>
        <figure
          className="technology-img-wrapper"
          key={data.technology[technologyIndex].name}
        >
          <img
            src={data.technology[technologyIndex].images.portrait}
            alt={data.technology[technologyIndex].name}
            className="technology-img"
          />
        </figure>
      </section>
    </main>
  );
}
