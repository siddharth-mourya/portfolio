import React, { useEffect, useState } from "react";
import styles from "./index.styles.module.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const listenScrollEvent = () => {
    if (window.scrollY > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  return (
    <>
      <nav
        className={`navbar  ${
          scrolled ? styles["navbar-on-scroll"] : ""
        } px-lg-5 bg-white navbar-light px-md-5 position-fixed vw-100 navbar-expand-sm`}
      >
        <a className="navbar-brand" href="#">
          &lt; <span className="text-warning">/</span> &gt;
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-list-5"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-list-5">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about-me-section">
                Aboutme
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills-section">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects-section">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience-education-section">
                Education & Experience
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
