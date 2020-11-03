import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MyInfo from './components/MyInfo';
import MyProjects from './components/MyProjects';

class App extends React.Component {
  constructor () {
    super();

  }

  render() {
    return (
      <div className="App">
        <MyInfo />
        <MyProjects />
      </div>
    );
  }
}

export default App;
