import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';
import SwitcherItem from './switcher-item';

const baseClassName = 'pbg-consumer-mobile pbg-switcher';

const Switcher = ({ options, value, onChange }) => (
  <div className={baseClassName}>
    {options.map((option, index) => (
      <SwitcherItem
        key={option.value}
        label={option.label}
        hint={option.hint}
        active={option.value === value}
        value={option.value}
        onChange={onChange}
        className={cx({
          first: index === 0,
          last: index === options.length - 1,
        })}
      />
    ))}
  </div>
);

Switcher.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string.isRequired, hint: PropTypes.string, value: PropTypes.string.isRequired })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Switcher.defaultProps = {
  value: null,
  onChange: null,
};

export default Switcher;
