import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-navbar-menu-link-item';

const NavbarMenuLinkItem = ({ label, href }) => (
  <div className={baseClassName} onTouchStart="">
    <a href={href} className="pbg-mobile-label-link">
      <span>{label}</span>
      <div className="pbg-icon-arrow-right-small-blue" />
    </a>
  </div>
);

NavbarMenuLinkItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavbarMenuLinkItem;
