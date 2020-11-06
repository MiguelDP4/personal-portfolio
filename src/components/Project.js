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
          <a href={projectInfo.repo} target="_blank">
            <i className="fa fa-github-square"> </i>
            Check the repository
          </a>
          <a href={projectInfo.demo} target="_blank">
            <i className="fa fa-window-restore"></i>
            Check the live demo
          </a>
        </div>
      </div>
    </Slide>
  );
}

export default Project;