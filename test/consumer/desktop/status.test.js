import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import Status from '../../../components/consumer/desktop/status';
import Hint from '../../../components/consumer/desktop/hint';
import PopoverTooltip from '../../../components/consumer/desktop/popover-tooltip';

describe('Status', () => {
  const labelText = 'Inventory';
  const valueText = 'Reservation status';
  const hintText = 'This is a hint';

  it('should have a correct wrapper element', () => {
    const wrapper = shallow(<Status label={labelText} value={valueText} hint={hintText} iconType="lock" />);
    expect(wrapper.hasClass('pbg-status')).to.be.equal(true);
  });

  it('should render the status icon', () => {
    const wrapper = shallow(<Status label={labelText} value={valueText} hint={hintText} iconType="lock" />);
    expect(wrapper.html()).to.include('pbg-status-icon-container');
  });

  it('should render the label', () => {
    const wrapper = shallow(<Status label={labelText} value={valueText} hint={hintText} iconType="lock" />);
    expect(wrapper.html()).to.include(labelText);
  });

  it('should render the value', () => {
    const wrapper = shallow(<Status label={labelText} value={valueText} hint={hintText} iconType="lock" />);
    expect(wrapper.html()).to.include(valueText);
  });

  it('should render the hint', () => {
    const wrapper = shallow(<Status label={labelText} value={valueText} hint={hintText} iconType="lock" />);
    expect(wrapper.find(Hint).contains(hintText)).to.be.true;
  });

  it('should not render a tooltip if it is not given', () => {
    const wrapper = shallow(<Status label={labelText} value={valueText} hint={hintText} iconType="lock" />);
    expect(wrapper.find(PopoverTooltip)).to.have.lengthOf(0);
  });

  it('should render a tooltip if it is given', () => {
    const tooltip = 'Tooltip content';
    const component = <Status label={labelText} value={valueText} hint={hintText} iconType="lock" tooltip={tooltip} />;
    const wrapper = shallow(component);
    expect(wrapper.find(PopoverTooltip)).to.have.lengthOf(1);
  });
});
