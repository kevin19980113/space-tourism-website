import { NavLink } from "react-router-dom";
import headerLogo from "../assets/shared/logo.svg";
import { useState, useEffect, useRef } from "react";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const menuBtnRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (e.target === menuRef.current) {
        setIsMenuOpen(!isMenuOpen);
      }
    };

    document.addEventListener("click", (e) => {
      if (
        !menuRef.current.contains(e.target) &&
        !menuBtnRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    });

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className={classes["main-header"]}>
        <figure className={classes["main-header-logo"]}>
          <NavLink
            to="/space-tourism-website"
            className={({ isActive }) => (isActive ? classes.active : "")}
            end
          >
            <img src={headerLogo} alt="Logo" className={classes.logo} />
          </NavLink>
        </figure>
        <div className={classes.devider}></div>
        <nav
          className={`${classes["main-navigation"]} ${
            isMenuOpen ? classes["show-menu"] : ""
          }`}
          ref={menuRef}
        >
          <ul className={classes["main-navigation-items"]}>
            <li className={classes["main-navigation-item"]}>
              <NavLink
                to="/space-tourism-website"
                className={({ isActive }) => (isActive ? classes.active : "")}
                end
              >
                <span className={classes.number}>00</span> Home
              </NavLink>
            </li>
            <li className={classes["main-navigation-item"]}>
              <NavLink
                to="/space-tourism-website/destination/"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                <span className={classes.number}>01</span> Destination
              </NavLink>
            </li>
            <li className={classes["main-navigation-item"]}>
              <NavLink
                to="/space-tourism-website/crew"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                <span className={classes.number}>02</span> Crew
              </NavLink>
            </li>
            <li className={classes["main-navigation-item"]}>
              <NavLink
                to="/space-tourism-website/technology"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                <span className={classes.number}>03</span> Technology
              </NavLink>
            </li>
          </ul>
        </nav>
        <a
          className={`${classes["main-header-menu-button"]} ${
            isMenuOpen ? classes.toggleMenu : ""
          }`}
          onClick={toggleMenu}
          ref={menuBtnRef}
        ></a>
      </header>
      <div
        className={`${classes.mask} ${isMenuOpen ? classes["show-mask"] : ""}`}
      ></div>
    </>
  );
}
