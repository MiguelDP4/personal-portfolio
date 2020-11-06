import React from 'react';
import Slide from 'react-reveal/Slide';

const Project = props => {
  const { 
          projectInfo
        } = props;
  return (
    <Slide top>
      <div className="project paper-shadow-2">
        <div className="project-screenshot">
          <img src={projectInfo.screenshot}></img>
        </div>
        <div className="project-description">
          <h2>{projectInfo.title}</h2>
          <p>{projectInfo.description}</p>
        </div>
        <div className="project-links">
          <a className="fa fa-github-square" href={projectInfo.repo} target="_blank">
            Check the repository
          </a>
          <a className="fa fa-window-restore" href={projectInfo.demo} target="_blank">
            Check the live demo
          </a>
        </div>
      </div>
    </Slide>
  );
}

export default Project;