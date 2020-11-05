import React from 'react';
import BasicInfo from './BasicInfo';
import MoreInfo from './MoreInfo';

const MyInfo = props => {
  const { toggleInfo, infoClasses, otherInfoClasses } = props
  return (
    <div className="my-info paper-shadow-3">
      <BasicInfo toggleInfo={toggleInfo} classes={infoClasses} />
      <MoreInfo toggleInfo={toggleInfo} classes={otherInfoClasses} />
    </div>
  );
};

export default MyInfo;