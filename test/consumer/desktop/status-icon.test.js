import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import StatusIcon from '../../../components/consumer/desktop/status-icon';

describe('StatusIcon', () => {
  it('should have a correct wrapper element', () => {
    const wrapper = shallow(<StatusIcon />);
    expect(wrapper.hasClass('pbg-status-icon')).to.be.equal(true);
  });

  it('should render an icon', () => {
    const wrapper = shallow(<StatusIcon />);
    expect(wrapper.html()).to.include('<i');
  });
});
