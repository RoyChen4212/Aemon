import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const baseClassName = 'pbg-global-assets-preview pbg-icons-preview';

const Icons = ({ className }) => {
  return (
    <div className={baseClassName}>
      <div className={className} />
    </div>
  );
};

Icons.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Icons;
