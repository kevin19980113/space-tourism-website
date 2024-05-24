import { NavLink } from "react-router-dom";
import headerLogo from "../assets/shared/logo.svg";
import { useState } from "react";

export default function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className="main-header">
        <figure className="main-header-logo">
          <NavLink to="/">
            <img src={headerLogo} alt="Logo" className="logo" />
          </NavLink>
        </figure>
        <div className="devider"></div>
        <nav className={`main-navigation ${isMenuOpen ? "show-menu" : ""}`}>
          <ul className="main-navigation-items">
            <li className="main-navigation-item">
              <NavLink to="/">
                <span className="number">00</span> Home
              </NavLink>
            </li>
            <li className="main-navigation-item">
              <NavLink to="destination">
                <span className="number">01</span> Destination
              </NavLink>
            </li>
            <li className="main-navigation-item">
              <NavLink to="crew">
                <span className="number">02</span> Crew
              </NavLink>
            </li>
            <li className="main-navigation-item">
              <NavLink to="technology">
                <span className="number">03</span> Technology
              </NavLink>
            </li>
          </ul>
        </nav>
        <a
          className={`main-header-menu-button ${
            isMenuOpen ? "toggleMenu" : ""
          } `}
          onClick={toggleMenu}
        ></a>
      </header>
      <div className={`mask ${isMenuOpen ? "show-mask" : ""}`}></div>
    </>
  );
}
