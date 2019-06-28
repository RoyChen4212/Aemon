import React from 'react';
import Avatar from '../../shared/avatar';

export default props => {
  const { size } = props;
  return <Avatar {...props} className="pbg-consumer-mobile" size={size || 32} />;
};
