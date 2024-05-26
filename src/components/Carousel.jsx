/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import classes from "../pages/Crew.module.css";

export default function Carousel({ crews }) {
  const [crewIndex, setCrewIndex] = useState(0);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setSwipeDistance(0);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    setSwipeDistance(touchEndX.current - touchStartX.current);
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 0) {
      setCrewIndex(crewIndex + 1);
      if (crewIndex === crews.length - 1) {
        setCrewIndex(0);
      }
    }

    if (touchStartX.current - touchEndX.current < 0) {
      setCrewIndex(crewIndex - 1);
      if (crewIndex === 0) {
        setCrewIndex(crews.length - 1);
      }
    }
    setSwipeDistance(0);
  };

  return (
    <>
      <div className={classes["crew-info-wrapper"]}>
        <div
          className={classes["crew-info-slider"]}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {crews.map((crew) => (
            <div
              key={crew.name}
              className={classes["crew-info-item"]}
              style={{
                transform: `translateX(calc(${
                  -100 * crewIndex
                }% + ${swipeDistance}px))`,
              }}
            >
              <h3 className={classes["crew-info-item-role"]}>
                {crew.role.toUpperCase()}
              </h3>
              <h1 className={classes["crew-info-item-name"]}>
                {crew.name.toUpperCase()}
              </h1>
              <p className={classes["crew-info-item-bio"]}>{crew.bio}</p>
            </div>
          ))}
        </div>
        <div className={classes["carousel-indicators"]}>
          {crews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCrewIndex(index)}
              className={`${classes["carousel-button"]} ${
                crewIndex === index ? classes["active-crew"] : ""
              }`}
            ></button>
          ))}
        </div>
      </div>
      <figure
        className={classes["crew-img-slider"]}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {crews.map((crew) => (
          <img
            src={crew.images.webp}
            alt={crew.name}
            className={classes["crew-img"]}
            key={crew.name}
            style={{
              transform: `translateX(calc(${
                -100 * crewIndex
              }% + ${swipeDistance}px))`,
            }}
          ></img>
        ))}
      </figure>
    </>
  );
}
