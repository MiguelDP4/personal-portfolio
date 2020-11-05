import React from 'react';
import './App.scss';
import MyInfo from './components/MyInfo';
import MyProjects from './components/MyProjects';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      infoClasses: "my-info-container paper-shadow-2",
      otherInfoClasses: "my-info-container-hidden paper-shadow-2",
      project: 0,
    }

    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggleInfo() {
    const { infoClasses, otherInfoClasses } = this.state;
    if(infoClasses === "my-info-container paper-shadow-2") {
      this.setState({
        infoClasses: "my-info-container-hidden paper-shadow-2",
      });
    } else {
      this.setState({
        infoClasses: "my-info-container paper-shadow-2",
      });
    }

    if(otherInfoClasses === "my-info-container paper-shadow-2") {
      this.setState({
        otherInfoClasses: "my-info-container-hidden paper-shadow-2",
      });
    } else {
      this.setState({
        otherInfoClasses: "my-info-container paper-shadow-2",
      });
    }  
  }

  render() {
    const { infoClasses, otherInfoClasses } = this.state;
    return (
      <div className="App">
        <MyInfo toggleInfo={this.toggleInfo} 
        infoClasses={infoClasses} 
        otherInfoClasses={otherInfoClasses} />
        <MyProjects />
      </div>
    );
  }
}

export default App;
