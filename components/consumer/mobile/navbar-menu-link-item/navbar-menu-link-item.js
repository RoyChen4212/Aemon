import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-navbar-menu-link-item';

const NavbarMenuLinkItem = ({ label, href, className }) => (
  <div className={cx(baseClassName, className)} onTouchStart="">
    <a href={href} className="pbg-mobile-label-link">
      <span>{label}</span>
      <div className="pbg-icon-arrow-right-small-blue" />
    </a>
  </div>
);

NavbarMenuLinkItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

NavbarMenuLinkItem.defaultProps = {
  className: null,
};

export default NavbarMenuLinkItem;
