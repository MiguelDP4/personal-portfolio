import React from 'react';
import Rotate from 'react-reveal/Rotate';
import picture from '../img/Mike.jpg';

const MoreInfo = props => {
  const { toggleInfo } = props;
  return (
    <Rotate top left>
      <div id='more-info' className="my-info-container paper-shadow-2">
        <div className="basic-info-container">
          <img src={picture}  alt="mugshot"></img>
          <div className="basic-info">
            <span className="bold-2">Miguel Angel Dubois Pappa</span>
            <span>Full Stack Developer</span>
          </div>
        </div>
        <div className="basic-info-container flex-1 padding-y-s flex-box">
          <div>
            <p className="padding-y-m font-size-2">
              I'm a growth driven person. I like to learn as much as possible about everything.
              I love programming and spend most of my time studying to become better at it,
              I am also fond of solving coding challenges just for fun, exercising my mind.
            </p>
            <p className="padding-y-m font-size-2">
              I specialize at Ruby, Ruby on Rails, JavaScript, React and Redux.
              However, I also know C# and Java.
            </p>
          </div>
        </div>
        <div className="info-card-toggle">
          <button onClick={toggleInfo}>More About Me</button>
        </div>
      </div>
    </Rotate>
  );
}

export default MoreInfo;