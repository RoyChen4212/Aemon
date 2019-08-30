import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';
import Avatar from '../avatar';

const baseClassName = 'pbg-consumer-mobile pbg-navbar-menu-user-item';

const NavbarMenuUserItem = ({ fullName, hint, avatar, className }) => (
  <div className={cx(baseClassName, className)}>
    <Avatar fullName={fullName} size={40} src={avatar} />
    <div className="pbg-navbar-menu-user-item-text-wrapper">
      <div className="pbg-mobile-small-normal">{hint}</div>
      <div className="pbg-mobile-heading-2">{fullName}</div>
    </div>
  </div>
);

NavbarMenuUserItem.propTypes = {
  fullName: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  className: PropTypes.string,
};

NavbarMenuUserItem.defaultProps = {
  avatar: null,
  className: null,
};

export default NavbarMenuUserItem;
