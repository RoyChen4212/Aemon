import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Avatar from '../avatar';

const baseClassName = 'pbg-consumer-mobile pbg-group-member';

const GroupMember = ({ avatar, fullName, hint }) => (
  <div className={baseClassName}>
    <Avatar size={32} src={avatar} />
    <div className="pbg-group-member-labels">
      <div className="pbg-mobile-label-normal">{fullName}</div>
      {hint && <div className="pbg-mobile-label-secondary">{hint}</div>}
    </div>
  </div>
);

GroupMember.propTypes = {
  avatar: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  hint: PropTypes.string,
};

GroupMember.defaultProps = {
  hint: null,
};

export default GroupMember;
