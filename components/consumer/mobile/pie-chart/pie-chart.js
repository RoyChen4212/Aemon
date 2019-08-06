import React from 'react';
import PropTypes from 'prop-types';
import PieChartComponent from 'react-minimal-pie-chart';
import colorCodes from '../../shared/scss/_styleguide.scss';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-pie-chart';

const PieChart = ({ label, hint, dataPoints }) => (
  <div className={baseClassName}>
    <div className="pbg-pie-chart-text-wrapper">
      <div className="pbg-mobile-heading-2">{label}</div>
      <div className="pbg-mobile-small-normal">{hint}</div>
    </div>
    <PieChartComponent
      data={dataPoints.map(data => ({ value: data.percentage, color: colorCodes[data.color] }))}
      lineWidth={8}
      paddingAngle={5}
    />
  </div>
);

PieChart.propTypes = {
  label: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  dataPoints: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
};

PieChart.defaultProps = {
  dataPoints: [],
};

export default PieChart;
