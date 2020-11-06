import React from 'react';
import BasicInfo from './BasicInfo';
import MoreInfo from './MoreInfo';

const MyInfo = props => {
  const { toggleInfo, infoSquare } = props
  return (
    <div className="my-info paper-shadow-3">
        { infoSquare === "basic-info" ? (
          <BasicInfo toggleInfo={toggleInfo} />
        ) : (
          <MoreInfo toggleInfo={toggleInfo} />
        )}
    </div>
  );
};

export default MyInfo;