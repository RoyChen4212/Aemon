import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-navbar-menu-language-item';

const NavbarMenuLanguageItem = ({ label, languages, value, onChange, className }) => (
  <div className={cx(baseClassName, className)}>
    <div className="pbg-navbar-menu-language-item-wrapper">
      <div className="pbg-icon-globe-small-gray" />
      <div className="pbg-mobile-label-normal">{label}</div>
    </div>
    <select
      className="pbg-navbar-menu-language-item-select pbg-mobile-label-link"
      onChange={onChange}
      value={value}
      onTouchStart=""
    >
      {languages.map(lang => (
        <option value={lang.value} key={lang.value}>
          {lang.label}
        </option>
      ))}
    </select>
  </div>
);

NavbarMenuLanguageItem.propTypes = {
  label: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string.isRequired, value: PropTypes.string.isRequired })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
};

NavbarMenuLanguageItem.defaultProps = {
  value: null,
  className: null,
};

export default NavbarMenuLanguageItem;
