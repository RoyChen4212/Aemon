import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';
import { colorTypes } from '../../shared/color-types';

const baseClassName = 'pbg-global-assets-preview pbg-colors-preview';

const Colors = ({ color, label, labelGrade }) => {
  const colors = [];
  const colorTypePrefix = color.toUpperCase().replace('-', '_');
  for (let i = 10; i <= 100; i += 10) {
    const colClassName = cx('pbg-colors-preview-col', { 'pbg-dark': i < 60 });
    colors.push(
      <div className={`pbg-colors-preview-row pbg-bg-color-${color}-${i}`}>
        <div className={colClassName}>
          {label} {i}
        </div>
        <div className={colClassName}>
          ${color}-{i}
        </div>
        <div className={colClassName}>{colorTypes[`${colorTypePrefix}_${i}`]}</div>
      </div>
    );
  }

  return (
    <div className={baseClassName}>
      <div className={`pbg-colors-preview-header pbg-bg-color-${color}-${labelGrade}`}>
        <h2>{label}</h2>
      </div>
      {colors}
    </div>
  );
};

Colors.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelGrade: PropTypes.number.isRequired,
};

export default Colors;
