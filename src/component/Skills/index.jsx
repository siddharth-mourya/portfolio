import React from "react";
// import styles from './index.styles.module.scss'

const Skills = () => {
  return (
    <>
      <div className="flex-wrap mb-5 shadow border border-light mx-5">
        <div className="text-right mr-3 py-4">
          <h3>
            <span className="text-warning">S</span>
            <span>kills</span>
          </h3>
        </div>
        <div className="skill-container flex-wrap justify-content-center d-flex">
          <div className="skill text-center p-3 ">
            <img
              className=""
              width="60px"
              height="60px"
              alt="this cannot be displayed"
              src={`${process.env.PUBLIC_URL}/images/skills/React.png`}
            />
            <p className="font-weight-bold">ReactJs</p>
          </div>
          <div className="skill text-center p-3 ">
            <img
              className=""
              width="60px"
              height="60px"
              alt="this cannot be displayed"
              src={`${process.env.PUBLIC_URL}/images/skills/Node.png`}
            />
            <p className="font-weight-bold">NodeJS</p>
          </div>
          <div className="skill text-center p-3 ">
            <img
              className=""
              width="60px"
              height="60px"
              alt="this cannot be displayed"
              src={`${process.env.PUBLIC_URL}/images/skills/HTML.png`}
            />
            <p className="font-weight-bold">HTML</p>
          </div>
          <div className="skill text-center p-3 ">
            <img
              className=""
              width="60px"
              height="60px"
              alt="this cannot be displayed"
              src={`${process.env.PUBLIC_URL}/images/skills/CSS.png`}
            />
            <p className="font-weight-bold">CSS</p>
          </div>
          <div className="skill text-center p-3 ">
            <img
              className=""
              width="60px"
              height="60px"
              alt="this cannot be displayed"
              src={`${process.env.PUBLIC_URL}/images/skills/Javascript.png`}
            />
            <p className="font-weight-bold">Javascript</p>
          </div>
          <div className="skill text-center p-3 ">
            <img
              className=""
              width="60px"
              height="60px"
              alt="this cannot be displayed"
              src={`${process.env.PUBLIC_URL}/images/skills/MongoDB.png`}
            />
            <p className="font-weight-bold">Mongo DB</p>
          </div>
          <div className="skill text-center p-3 ">
            <img
              className=""
              width="60px"
              height="60px"
              alt="this cannot be displayed"
              src={`${process.env.PUBLIC_URL}/images/skills/Bootstrap.png`}
            />
            <p className="font-weight-bold">Bootsrap</p>
          </div>
        </div>
        <div className="familiar-skills py-3">
          <div className="text-center pb-2 font-weight-bold">
            Familiar Skills
          </div>
          <div className="skill d-flex flex-wrap justify-content-center p-3 ">
            <span className="badge badge-pill badge-info p-2 m-2">Python</span>
            <span className="badge badge-pill badge-info p-2 m-2">Java</span>
            <span className="badge badge-pill badge-info p-2 m-2">C/C++</span>
            <span className="badge badge-pill badge-info p-2 m-2">Flask</span>
            <span className="badge badge-pill badge-info p-2 m-2">Arduino</span>
            <span className="badge badge-pill badge-info p-2 m-2">Github</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
