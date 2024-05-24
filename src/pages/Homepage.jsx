import { NavLink } from "react-router-dom";

export default function Homepage() {
  return (
    <main className="homepage-main-container">
      <div className="homepage-content">
        <h4>SO, YOU WANT TO TRAVEL TO</h4>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="Explore-button-wrapper">
        <NavLink to="destination" className="Explore-button">
          EXPLORE
        </NavLink>
      </div>
    </main>
  );
}