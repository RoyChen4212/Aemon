import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PieChartComponent from 'react-minimal-pie-chart';
import colorCodes from '../../../components/consumer/shared/scss/_styleguide.scss';

import PieChart from '../../../components/consumer/mobile/pie-chart';
import { colorTypes } from '../../../components/consumer/shared/color-types';

describe('pie-chart', () => {
  it('should have correct class names', () => {
    const dataPoints = [
      {
        percentage: 68,
        color: '#53BC6A',
      },
      {
        percentage: 20,
        color: '#FFBB33',
      },
    ];
    const label = 'label';
    const hint = 'hint';
    const wrapper = shallow(<PieChart label={label} hint={hint} dataPoints={dataPoints} />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-pie-chart')).to.be.true;
  });

  it('should have label and hint', () => {
    const dataPoints = [
      {
        percentage: 68,
        color: '#53BC6A',
      },
      {
        percentage: 20,
        color: '#FFBB33',
      },
    ];
    const label = 'label';
    const hint = 'hint';
    const wrapper = shallow(<PieChart label={label} hint={hint} dataPoints={dataPoints} />);
    const labelItem = wrapper.find('.pbg-mobile-heading-2');
    const hintItem = wrapper.find('.pbg-mobile-small-normal');
    expect(labelItem.text()).to.equal(label);
    expect(hintItem.text()).to.equal(hint);
  });

  it('should have correct mapped pie chart', () => {
    const dataPoints = [
      {
        percentage: 68,
        color: colorTypes.RED_10,
      },
      {
        percentage: 20,
        color: colorTypes.GREEN_60,
      },
    ];
    const label = 'label';
    const hint = 'hint';
    const wrapper = shallow(<PieChart label={label} hint={hint} dataPoints={dataPoints} />);
    const pieChart = wrapper.find(PieChartComponent);
    expect(pieChart.prop('data')[0].color).to.equal(colorCodes[dataPoints[0].color]);
    expect(pieChart.prop('data')[0].percentage).to.equal(dataPoints[0].value);
    expect(pieChart.prop('data')[1].color).to.equal(colorCodes[dataPoints[1].color]);
    expect(pieChart.prop('data')[1].percentage).to.equal(dataPoints[1].value);
  });
});
