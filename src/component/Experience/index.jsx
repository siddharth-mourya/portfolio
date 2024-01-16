 import React from "react";
import styles from "./index.styles.module.scss";

const Experience = () => {
  const experience = [
   {
      company: "Publicis Sapient",
      companyIcon: `${process.env.PUBLIC_URL}/images/places/PS-Logo.png`,
      position: "Senior Experience Engineer",
      description: [
       "Completed comprehensive training program covering React.",
       "Acquired in-depth knowledge of company policies, procedures, and industry best practices.",
       "Prepared to apply acquired skills and contribute effectively to upcoming projects.",
       "Proven ability to quickly grasp new concepts and technologies."
      ],
      date: "Jan 2024 - Present",
    },
    {
      company: "Globallogic",
      companyIcon: `${process.env.PUBLIC_URL}/images/places/GL-Logo.png`,
      position: "Senior Software Engineer",
      description: [
        "Developed and maintained responsive web apps. ",
        "Ensuring cross-browser compatibility and optimal user experience. ",
        "Collaborated closely with design and back-end teams to implement pixel-perfect UI designs and integrate frontend components with backend systems. ",
        "Utilized React Redux to build dynamic and interactive user interfaces. ",
        "Implemented complex UI/UX features, such as drag-and-drop functionality, and form validations, to enhance user engagement and improve overall usability. ",
      ],
      date: "Feb 2023 - Present",
    },
    {
      company: "Globallogic",
      companyIcon: `${process.env.PUBLIC_URL}/images/places/GL-Logo.png`,
      position: "Software Engineer",
      description: [
        "Actively participated in code reviews, providing feedback and suggestions on over 1000 lines of code, resulting in improved code quality and maintainability.",
        "Implemented and maintained unit tests and integration tests for projects, resulting in a more than 95% test coverage and increased stability of the frontend codebase.",
        "Received recognition and appreciation from clients and stakeholders for delivering high-quality frontend solutions that met their business objectives.",
      ],
      date: "Jan 2022 - Feb 2023",
    },
    {
      company: "Globallogic",
      companyIcon: `${process.env.PUBLIC_URL}/images/places/GL-Logo.png`,
      position: "Associate Software Engineer",
      description: [
        "Collaborated with backend developers to design and consume RESTful APIs, ensuring smooth data  flow and efficient communication between frontend and backend systems.",
        "Implemented and maintained unit tests and integration tests to ensure the reliability and stability of the frontend codebase.",
        "Actively participated in code reviews, providing constructive feedback and ensuring high code quality and adherence to established coding standards.",
      ],
      date: "Mar 2021 - Jan 2022",
    },
    {
      company: "Globallogic",
      companyIcon: `${process.env.PUBLIC_URL}/images/places/GL-Logo.png`,
      position: "Trainee Software Engineer",
      description: [
        "Learn ReactJs Redux, and Worked on multiple projects during learning phase. Learned Agile process while in training.",

        "Demonstrated a strong desire to learn and grow by actively researching and exploring new frontend technologies, attending workshops, and completing online courses to expand knowledge and skillset.",

        "Actively engaged in team discussions and meetings, contributing ideas and suggestions to problem-solving sessions and project planning initiatives.",
      ],
      date: "Dec 2020 - Mar 2021",
    },
    {
      company: "Freelancer",
      companyIcon: `${process.env.PUBLIC_URL}/images/places/JobBag.png`,
      position: "Freelance UI desginer",
      description: ["Description 1", "Description 2"],
      date: "May 2018 - Aug 2020",
    },
  ];

  const education = [
    {
      school: "Technocrats Institute Of Technology, Bhopal",
      schoolIcon: `${process.env.PUBLIC_URL}/images/places/tit.png`,
      degree: "Bachelor Of Engineering",
      description:
        "I completed my computer science degree from Technocrats Institute Of Technology covering key computer science concepts, algorithms, data structures, software engineering, and programming languages.",
      date: "May 2016 - Sept 2020",
    },
    {
      school: "Carmel Convent Sr Sec School, Bhopal",
      schoolIcon: `${process.env.PUBLIC_URL}/images/places/carmel.jpeg`,
      degree: "High Schooling",
      description: "",
      date: "Mar 2016",
    },
  ];
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-warning text-center ">Experience</h2>
            <ul className={`px-2 ${styles["timeline"]}`}>
              {experience.map((exp) => (
                <li className="mb-3">
                  <div className="d-flex justify-content-start">
                    <img
                      className={styles["company-icon"]}
                      src={exp.companyIcon}
                    />
                    <div className="ml-2">
                      <h5 className="mb-0">{exp.position}</h5>
                      <h6 className="text-primary">{exp.company}</h6>
                      <h6>{exp.date}</h6>
                      {/* {exp.description.map((des) => (
                        <p className="mb-0"> * {des}</p>
                      ))} */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <h2 className="text-warning text-center">Education</h2>
            <ul className={`px-2 ${styles["timeline"]}`}>
              {education.map((edu) => (
                <li className="mb-3">
                  <div className="d-flex justify-content-start">
                    <img
                      className={styles["company-icon"]}
                      src={edu.schoolIcon}
                    />
                    <div className="ml-2">
                      <h5 className="mb-0">{edu.degree}</h5>
                      <h6 className="text-primary">{edu.school}</h6>
                      <h6>{edu.date}</h6>
                      <p className="mb-0">{edu.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
