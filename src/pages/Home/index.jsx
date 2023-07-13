import React from "react";
import Aboutme from "../../component/AboutMe";
import Header from "../../component/Header";
import Projects from "../../component/Projects";
import Skills from "../../component/Skills";
import Experience from "../../component/Experience";
const Home = () => {
  const menuItems = ["Home", "Content"];
  return (
    <>
      {/* header */}
      <div>
        <Header />
        <div id="about-me-section" className="my-5 pt-5">
          <Aboutme />
        </div>
        <div id="skills-section" className="my-5 pt-5">
          <Skills />
        </div>
        <div id="experience-education-section" className="my-5 pt-5">
          <Experience />
        </div>
        <div id="projects-section" className="my-5 pt-5">
          <Projects />
        </div>
        <div className="my-5 py-5"></div>
      </div>
    </>
  );
};
export default Home;
