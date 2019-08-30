import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import PieChartComponent from 'react-minimal-pie-chart';
import colorCodes from '../../shared/scss/_styleguide.scss';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-pie-chart';

const PieChart = ({ label, hint, dataPoints, className }) => (
  <div className={cx(baseClassName, className)}>
    <div className="pbg-pie-chart-text-wrapper">
      <div className="pbg-mobile-heading-2">{label}</div>
      <div className="pbg-mobile-small-normal">{hint}</div>
    </div>
    <PieChartComponent
      data={dataPoints.map(data => ({ value: data.percentage, color: colorCodes[data.color] }))}
      lineWidth={12}
      paddingAngle={2}
      startAngle={-90}
    />
  </div>
);

PieChart.propTypes = {
  label: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  className: PropTypes.string,
  dataPoints: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
};

PieChart.defaultProps = {
  dataPoints: [],
  className: null,
};

export default PieChart;
