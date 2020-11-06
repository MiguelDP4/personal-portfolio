import React from 'react';
import './App.scss';
import MyInfo from './components/MyInfo';
import MyProjects from './components/MyProjects';
import projectsInfo from './projectsInfo';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      infoSquare: "basic-info",
      project: 0,
    }

    this.toggleInfo = this.toggleInfo.bind(this);
    this.projectPlus = this.projectPlus.bind(this);
    this.projectMinus = this.projectMinus.bind(this);
  }

  toggleInfo() {
    const { infoSquare } = this.state;
    if(infoSquare === "basic-info") {
      this.setState({
        infoSquare: "other-info",
      });
    } else {
      this.setState({
        infoSquare: "basic-info",
      });
    }
  }

  projectPlus() {
    const { project } = this.state;
    if(project < projectsInfo.length - 1) {
      this.setState({project: project + 1,});
    } else {
      this.setState({project: 0,});
    }
  }

  projectMinus() {
    const { project } = this.state;
    if(project > 0) {
      this.setState({project: project - 1,});
    } else {
      this.setState({project: projectsInfo.length - 1,});
    }
  }

  render() {
    const { infoSquare, project } = this.state;
    return (
      <div className="App">
        <MyInfo toggleInfo={this.toggleInfo} infoSquare={infoSquare} />
        <MyProjects projects={projectsInfo}
                    projectIndex={project}
                    nextProject={this.projectPlus}
                    previousProject={this.projectMinus} />
      </div>
    );
  }
}

export default App;
