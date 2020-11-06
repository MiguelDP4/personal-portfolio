import React from 'react';
import Project from './Project';

const MyProjects = props => {
  const {
    projects,
    projectIndex,
    nextProject,
    previousProject
  } = props;
  return (
    <div className="projects-container">
      <div className="project-switcher-left">
        <button className="fa fa-chevron-circle-left"
                onClick={nextProject}></button>
      </div>
      <div className="project-square">
        {
          projects.map(project => (
            project.index === projectIndex && (<Project projectInfo={project} />)
          ))
        }
      </div>
      <div className="project-switcher-right">
        <button className="fa fa-chevron-circle-right"
                onClick={previousProject}></button>
      </div>
    </div>
  );
}

export default MyProjects;