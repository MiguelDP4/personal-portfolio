import React from 'react';
import picture from '../img/Mike.jpg'

const MyInfo = props => {

  return (
    <div className="my-info paper-shadow-2">
      <div className="my-info-container paper-shadow-2">
        <div className="basic-info-container">
          <img src={picture}></img>
          <div className="basic-info">
            <span className="bold-2">Miguel Angel Dubois Pappa</span>
            <span>Full Stack Developer</span>
          </div>
        </div>
        <div className="other-info-container">
          <a className="fa fa-linkedin-square" href="https://www.linkedin.com/in/miguel-angel-dubois"></a>
          <a className="fa fa-github-square" href="https://www.linkedin.com/in/miguel-angel-dubois"></a>
          <a className="fa fa-twitter-square" href="https://www.linkedin.com/in/miguel-angel-dubois"></a>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;