import React from 'react';

const MoreInfo = props => {
  const { toggleInfo, classes } = props;
  return (
    <div id='more-info' className={classes}>
      <div className="other-info-container">

      </div>
      <div className="info-card-toggle">
        <button onClick={toggleInfo}>More About Me</button>
      </div>
    </div>
  );
}

export default MoreInfo;