import { data } from "../data.js";
import { useState } from "react";
import classes from "./Destination.module.css";

export default function Destination() {
  const [destination, setDestination] = useState(data.destinations[0]);

  function selectDestination(newDestination) {
    const selectedDestination = data.destinations.find(
      (dest) => dest.name === newDestination
    );
    setDestination(selectedDestination);
  }

  return (
    <main className={classes["destination-main-container"]}>
      <section className={classes["destination-content"]}>
        <h4>
          <span className={classes.number}>01</span> PICK YOUR DESTINATION
        </h4>
        <figure
          className={classes["destination-img-wrapper"]}
          key={destination.name}
        >
          <img
            src={destination.images.png}
            alt={destination.name}
            className={classes["destination-img"]}
          />
        </figure>
      </section>

      <section className={classes["pick-destination-wrapper"]}>
        <nav className={classes["destination-navbar"]}>
          <ul className={classes["destination-navbar-items"]}>
            {data.destinations.map((dest) => (
              <li
                key={dest.name}
                className={`${classes["destination-navbar-item"]} ${
                  dest.name === destination.name ? classes.selected : ""
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
        <div className={classes["destination-info"]}>
          <div className={classes["destination-info-item"]}>
            <span className={classes["destination-info-item-title"]}>
              AVG. Distance
            </span>
            <span className={classes["destination-info-item-value"]}>
              {destination.distance.toUpperCase()}
            </span>
          </div>
          <div className={classes["destination-info-item"]}>
            <span className={classes["destination-info-item-title"]}>
              EST. TRAVEL TIME
            </span>
            <span className={classes["destination-info-item-value"]}>
              {destination.travel.toUpperCase()}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
