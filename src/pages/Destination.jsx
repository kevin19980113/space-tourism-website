import { data } from "../data.js";
import { useState } from "react";
export default function Destination() {
  const [destination, setDestination] = useState(data.destinations[0]);

  function selectDestination(newDestination) {
    const selectedDestination = data.destinations.find(
      (dest) => dest.name === newDestination
    );
    setDestination(selectedDestination);
  }

  return (
    <main className="destination-main-container">
      <div className="destination-content">
        <h4>
          <span className="number">01</span> PICK YOUR DESTINATION
        </h4>
        <figure className="destination-img-wrapper" key={destination.name}>
          <img
            src={destination.images.png}
            alt=""
            className="destination-img"
          />
        </figure>
      </div>

      <div className="pick-destination-wrapper">
        <nav className="destination-navbar">
          <ul className="destination-navbar-items">
            {data.destinations.map((dest) => (
              <li
                key={dest.name}
                className={`destination-navbar-item ${
                  dest.name === destination.name ? "selected" : ""
                }`}
              >
                <a onClick={() => selectDestination(dest.name)}>
                  {dest.name.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <h1>{destination.name.toUpperCase()}</h1>
        <p>{destination.description}</p>
        <hr />
        <div className="destination-info">
          <div className="destination-info-item">
            <span className="destination-info-item-title">AVG. Distance</span>
            <span className="destination-info-item-value">
              {destination.distance.toUpperCase()}
            </span>
          </div>
          <div className="destination-info-item">
            <span className="destination-info-item-title">
              EST. TRAVEL TIME
            </span>
            <span className="destination-info-item-value">
              {destination.travel.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
