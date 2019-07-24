import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-navbar-brand';

const NavbarBrand = ({ merchantLogoUrl, poweredByText, menuIconVisible, onMenuClick }) => (
  <div className={baseClassName}>
    <div className="pbg-navbar-text-container">
      <div className="pbg-navbar-brand-icon" style={{ backgroundImage: `url(${merchantLogoUrl})` }} />
      <span className="pbg-navbar-brand-text">{poweredByText}</span>
      <div className="pbg-navbar-brand-pbg-icon pbg-logo-powered-by-gray" />
    </div>
    {menuIconVisible && <div className="pbg-navbar-brand-menu pbg-icon-menu-small-blue" onClick={onMenuClick} />}
  </div>
);

NavbarBrand.propTypes = {
  merchantLogoUrl: PropTypes.string.isRequired,
  poweredByText: PropTypes.string.isRequired,
  menuIconVisible: PropTypes.bool,
  onMenuClick: PropTypes.func,
};

NavbarBrand.defaultProps = {
  menuIconVisible: false,
  onMenuClick: null,
};

export default NavbarBrand;
