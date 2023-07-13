import React from "react";

function ProjectCard({ project }) {
  return (
    <>
      <div className="shadow">
        <div className="bg-white rounded shadow-sm">
          <img src={project.images} alt="" className="img-fluid card-img-top" />
          <div className="p-3">
            <div className="d-flex mb-3 justify-content-between">
              <h5>{project.title}</h5>
              {project.github ? (
                <a
                  href={project.github}
                  className="text-decoration-none text-dark"
                  target="_blank"
                >
                  <i className="fa-brands fa-github h4 mb-0 ml-3"></i>
                </a>
              ) : null}
            </div>
            <p className="small text-muted mb-2">
              {project.description.substring(0, 100)}
              {project.description.length > 100 && "..."}
            </p>
            <small className="mb-0">
              {project.url ? (
                <a target="_blank" href={project.url}>See Project</a>
              ) : (
                "Demo Not Available"
              )}
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
