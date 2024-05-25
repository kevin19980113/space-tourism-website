/* eslint-disable react/prop-types */
import { useState, useRef } from "react";

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
    if (touchStartX.current - touchEndX.current > 50) {
      setCrewIndex(crewIndex - 1);
      if (crewIndex === 0) {
        setCrewIndex(crews.length - 1);
      }
    }

    if (touchStartX.current - touchEndX.current < -50) {
      setCrewIndex(crewIndex + 1);
      if (crewIndex === crews.length - 1) {
        setCrewIndex(0);
      }
    }
    setSwipeDistance(0);
  };

  return (
    <>
      <div className="crew-info-wrapper">
        <div
          className="crew-info-slider"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {crews.map((crew) => (
            <div
              key={crew.name}
              className="crew-info-item"
              style={{
                transform: `translateX(calc(${
                  -100 * crewIndex
                }% - ${swipeDistance}px))`,
              }}
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
      <figure
        className="crew-img-slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {crews.map((crew) => (
          <img
            src={crew.images.webp}
            alt={crew.name}
            className="crew-img"
            key={crew.name}
            style={{
              transform: `translateX(calc(${
                -100 * crewIndex
              }% - ${swipeDistance}px))`,
            }}
          ></img>
        ))}
      </figure>
    </>
  );
}
