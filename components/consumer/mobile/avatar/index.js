import React from 'react';
import BaseAvatar from '../../shared/base-avatar';

export default props => {
  const { size } = props;
  return <BaseAvatar {...props} className="pbg-consumer-mobile" size={size || 32} />;
};
