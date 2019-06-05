import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import StatusIconContainer from '../../../components/consumer/desktop/status-icon-container';

describe('StatusIconContainer', () => {
  it('should have a correct wrapper element', () => {
    const wrapper = shallow(<StatusIconContainer type="lock" />);
    expect(wrapper.hasClass('pbg-status-icon-container')).to.be.equal(true);
  });

  it('should not render without a type', () => {
    const wrapper = shallow(<StatusIconContainer />);
    expect(wrapper.html()).to.not.include('<img');
  });

  it('should render an icon', () => {
    const wrapper = shallow(<StatusIconContainer type="lock" />);
    expect(wrapper.html()).to.include('<img');
  });
});
