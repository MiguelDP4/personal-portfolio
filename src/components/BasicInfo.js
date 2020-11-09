import React from 'react';
import picture from '../img/Mike.jpg';
import htmlLogo from '../img/html-logo.svg';
import cssLogo from '../img/css-logo.svg';
import rubyLogo from '../img/ruby-logo.svg';
import railsLogo from '../img/rails-logo.svg';
import reactLogo from '../img/react-logo.svg';
import reduxLogo from '../img/redux-logo.svg';
import jsLogo from '../img/js-logo.svg';
import Rotate from 'react-reveal/Rotate';

const BasicInfo = props => {
  const { toggleInfo } = props;
  return (
    <Rotate top left>
      <div id='basic-info' className="my-info-container paper-shadow-2">
          <div className="basic-info-container">
            <img src={picture}  alt="mugshot"></img>
            <div className="basic-info">
              <span className="bold-2">Miguel Angel Dubois Pappa</span>
              <span>Full Stack Developer</span>
            </div>
          </div>
          <div className="other-info-container">
            <div className="network-info-container">
              <a className="fa fa-linkedin-square"
                 href="https://www.linkedin.com/in/miguel-angel-dubois"
                 target="_blank"
                 rel="noopener noreferrer"> </a>
              <a className="fa fa-github-square"
              href="https://github.com/migueldp4"
              target="_blank"
              rel="noopener noreferrer"> </a>
              <a className="fa fa-twitter-square"
                 href="https://twitter.com/Mike_DP4"
                 target="_blank"
                 rel="noopener noreferrer"> </a>
            </div>
            <div className="stack-info-container">
              <div className="stack-info-container-row">
                <img className="stack-image" src={htmlLogo} alt="html-logo"></img>
                <img className="stack-image" src={cssLogo} alt="css-logo"></img>
                <img className="stack-image" src={jsLogo}  alt="javaScript-logo"></img>
              </div>
              <div className="stack-info-container-row">
                <img className="stack-image" src={rubyLogo}  alt="ruby-logo"></img>
                <img className="stack-image" src={railsLogo}  alt="rails-logo"></img>
                <img className="stack-image" src={reactLogo}  alt="react-logo"></img>
                <img className="stack-image" src={reduxLogo}  alt="redux-logo"></img>
              </div>
            </div>
          </div>
          <div className="info-card-toggle">
            <button onClick={toggleInfo}>More About Me</button>
          </div>
        </div>
    </Rotate>
  );
}

export default BasicInfo;