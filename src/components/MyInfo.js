import React from 'react';
import picture from '../img/Mike.jpg';
import htmlLogo from '../img/html-logo.svg';
import cssLogo from '../img/css-logo.svg';
import rubyLogo from '../img/ruby-logo.svg';
import railsLogo from '../img/rails-logo.svg';
import reactLogo from '../img/react-logo.svg';
import reduxLogo from '../img/redux-logo.svg';
import jsLogo from '../img/js-logo.svg';

const MyInfo = props => {

  return (
    <div className="my-info paper-shadow-3">
      <div className="my-info-container paper-shadow-2">
        <div className="basic-info-container">
          <img src={picture}></img>
          <div className="basic-info">
            <span className="bold-2">Miguel Angel Dubois Pappa</span>
            <span>Full Stack Developer</span>
          </div>
        </div>
        <div className="other-info-container">
          <div className="network-info-container">
            <a className="fa fa-linkedin-square" href="https://www.linkedin.com/in/miguel-angel-dubois"></a>
            <a className="fa fa-github-square" href="https://github.com/migueldp4"></a>
            <a className="fa fa-twitter-square" href="https://twitter.com/Mike_DP4"></a>
          </div>
          <div className="stack-info-container">
            <div className="stack-info-container-row">
              <img className="stack-image" src={htmlLogo}></img>
              <img className="stack-image" src={cssLogo}></img>
              <img className="stack-image" src={jsLogo}></img>
            </div>
            <div className="stack-info-container-row">
              <img className="stack-image" src={rubyLogo}></img>
              <img className="stack-image" src={railsLogo}></img>
              <img className="stack-image" src={reactLogo}></img>
              <img className="stack-image" src={reduxLogo}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;