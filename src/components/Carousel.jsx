/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Carousel({ crews }) {
  const [crewIndex, setCrewIndex] = useState(0);

  //   function showPrevCrew() {
  //     setCrewIndex(crewIndex - 1);
  //     if (crewIndex === 0) {
  //       setCrewIndex(crews.length - 1);
  //     }
  //   }
  //   function showNextCrew() {
  //     setCrewIndex(crewIndex + 1);
  //     if (crewIndex === crews.length - 1) {
  //       setCrewIndex(0);
  //     }
  //   }

  return (
    <>
      <div className="crew-info-wrapper">
        <div className="crew-info-slider">
          {crews.map((crew) => (
            <div
              key={crew.name}
              className="crew-info-item"
              style={{ transform: `translateX(${-100 * crewIndex}%)` }}
            >
              <h3 className="crew-info-item-role">{crew.role.toUpperCase()}</h3>
              <h1 className="crew-info-item-name">{crew.name.toUpperCase()}</h1>
              <p className="crew-info-item-bio">{crew.bio}</p>
            </div>
          ))}
        </div>
        <div className="carousel-indicators">
          {crews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCrewIndex(index)}
              className={`carousel-button ${
                crewIndex === index ? "active-crew" : ""
              }`}
            ></button>
          ))}
        </div>
      </div>
      <figure className="crew-img-slider">
        {crews.map((crew) => (
          <img
            src={crew.images.webp}
            alt={crew.name}
            className="crew-img"
            key={crew.name}
            style={{ transform: `translateX(${-100 * crewIndex}%)` }}
          ></img>
        ))}
      </figure>
    </>
  );
}
