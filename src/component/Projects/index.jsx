import React from "react";
import ProjectCard from "../shared/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Line Follower Robot",
      description:
        "This is a line follower Robot which we built in our college days I along with my friend Shubham Barkur has worked on it. It has got us some prizes in contests. We used Arduino and a relay of 8 IR sensors. We glued all those together and tada... We got our robot working with some logics as soul.",
      github: "https://github.com/siddharth-mourya/MazeSolver-LineFollower",
      url: "",
      images: [`${process.env.PUBLIC_URL}/images/projects/lineFollower.jpeg`],
    },
    {
      images: [`${process.env.PUBLIC_URL}/images/projects/transfly.jpeg`],
      title: "Gmail UI",
      description: "",
      techStack: ["HTML", "CSS", "Js", "BS4"],
      github: "https://github.com/siddharth-mourya/MazeSolver-LineFollower",
      url: "",
    },
    {
      images: [`${process.env.PUBLIC_URL}/images/projects/transfly.jpeg`],
      title: "Trade baazar",
      description: "",
      techStack: ["HTML", "CSS", "Js", "BS4"],
      github: "https://github.com/siddharth-mourya/MazeSolver-LineFollower",
      url: "",
    },
    {
      images: [`${process.env.PUBLIC_URL}/images/projects/transfly.jpeg`],
      title: "Url shortner",
      description: "",
      techStack: ["HTML", "CSS", "Js", "BS4"],
      github: "https://github.com/siddharth-mourya/MazeSolver-LineFollower",
      url: "",
    },
    {
      images: [`${process.env.PUBLIC_URL}/images/projects/transfly.jpeg`],
      title: "Transfly Logistic",
      description:
        "We developed the software which lets the mine staff to manage the entire booking to delivery process and maintain records of all the loading and unloading happening in a area.It is sed by Govt. Of Odisha to provide hassle free Mineral Ore Freight loading options to their vehicle owners.",
      techStack: ["MySql", "Flask", "HTML", "CSS", "Js", "BS4"],
      github: "https://github.com/minalarora/transfly-web",
      url: "",
    },
    {
      images: [`${process.env.PUBLIC_URL}/images/projects/transfly.jpeg`],
      title: "Vision Blind Assistant",
      description: "",
      techStack: ["HTML", "CSS", "Js", "BS4"],
      github: "https://github.com/siddharth-mourya/MazeSolver-LineFollower",
      url: "",
    },
    {
      images: [`${process.env.PUBLIC_URL}/images/projects/transfly.jpeg`],
      title: "Foodshala",
      description: "",
      techStack: ["HTML", "CSS", "Js", "BS4"],
      github: "https://github.com/siddharth-mourya/MazeSolver-LineFollower",
      url: "",
    },
    {
      images: [`${process.env.PUBLIC_URL}/images/projects/transfly.jpeg`],
      title: "Todo List Web app",
      description: "",
      techStack: ["HTML", "CSS", "Js", "BS4"],
      github: "https://github.com/siddharth-mourya/MazeSolver-LineFollower",
      url: "",
    },
    {
      images: [
        `${process.env.PUBLIC_URL}/images/projects/linkedin-remake-1.png`,
      ],
      title: "Linkedin Remake",
      description:
        "Designed this social media feeds page which is similar to how linkedin may look if i redesign",
      techStack: ["HTML", "CSS", "Js", "BS4"],
      github: "https://github.com/siddharth-mourya/LinkedinRemake",
      url: "https://siddharth-mourya.github.io/LinkedinRemake/",
    },
    {
      images: [`${process.env.PUBLIC_URL}/images/projects/transfly.jpeg`],
      title: "painter",
      description: "",
      techStack: ["HTML", "CSS", "Js", "BS4"],
      github: "https://github.com/siddharth-mourya/MazeSolver-LineFollower",
      url: "",
    },
    {
      images: [`${process.env.PUBLIC_URL}/images/projects/transfly.jpeg`],
      title: "Home Automation",
      description: "",
      techStack: ["HTML", "CSS", "Js", "BS4"],
      github: "https://github.com/siddharth-mourya/MazeSolver-LineFollower",
      url: "",
    },
    {
      images: [`${process.env.PUBLIC_URL}/images/projects/transfly.jpeg`],
      title: "Classic Snake Game",
      description: "",
      techStack: ["HTML", "CSS", "Js", "BS4"],
      github: "https://github.com/siddharth-mourya/MazeSolver-LineFollower",
      url: "",
    },
    {
      images: [`${process.env.PUBLIC_URL}/images/projects/house-wise-1.png`],
      title: "HouseWise Design",
      description:
        "This is a sample landing page for one of the company that i was willing to join. In the interview i was given mock design whihc i needed to replicate and this is what i came up with. The same is still there landing page in production.",
      techStack: ["HTML", "CSS", "Js", "BS4"],
      github: "https://github.com/siddharth-mourya/HouseWise-Design",
      url: "https://house-wise-design.vercel.app/",
    },
    {
      images: [`${process.env.PUBLIC_URL}/images/projects/transfly.jpeg`],
      title: "Dustbin Status",
      description: "",
      techStack: ["HTML", "CSS", "Js", "BS4"],
      github: "https://github.com/siddharth-mourya/MazeSolver-LineFollower",
      url: "",
    },
    {
      images: [`${process.env.PUBLIC_URL}/images/projects/transfly.jpeg`],
      title: "Traffic signal Automation",
      description: "",
      techStack: ["HTML", "CSS", "Js", "BS4"],
      github: "https://github.com/siddharth-mourya/MazeSolver-LineFollower",
      url: "",
    },
    {
      images: [`${process.env.PUBLIC_URL}/images/projects/transfly.jpeg`],
      title: "painter",
      description: "",
      techStack: ["HTML", "CSS", "Js", "BS4"],
      github: "https://github.com/siddharth-mourya/MazeSolver-LineFollower",
      url: "",
    },
  ];

  function chunk(array, size) {
    return array.reduce((chunks, item, i) => {
      if (i % size === 0) {
        chunks.push([item]);
      } else {
        chunks[chunks.length - 1].push(item);
      }
      return chunks;
    }, []);
  }

  const sections = chunk(projects, 4);

  return (
    <>
      <div className="flex-wrap pt-5 px-5">
        <div className="text-right py-4">
          <h3>
            <span>
              Projects <span className="text-warning">/</span> My work
            </span>
          </h3>
        </div>

        <div className="row">
          {sections.map((projectForCol, i) => (
            <div
              className="col-xl-3 col-lg-3 col-md-4 mb-4"
              key={`project-column-${i}`}
            >
              {projectForCol.map((project, i) => (
                <div
                  className="py-2"
                  key={`projectcard-${project.github}-${i}`}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Projects;

{
  /* <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
    <div className="bg-white rounded shadow-sm"><img src="https://bootstrapious.com/i/snippets/sn-gallery/img-2.jpg" alt="" className="img-fluid card-img-top" />
        <div className="p-4">
            <h5> <a href="#" className="text-dark">Blorange</a></h5>
            <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">PNG</span></p>
                <div className="badge badge-primary px-3 rounded-pill font-weight-normal">Trend</div>
            </div>
        </div>
    </div>
</div> */
}
