import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Hint from '../../../components/consumer/desktop/hint';

describe('Desktop Hint', () => {
  it('should render desktop hint', () => {
    const wrapper = shallow(<Hint />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
  });

  it('should have correct className when provided', () => {
    const className = 'className';
    const wrapper = shallow(<Hint className={className} />);
    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should render span tag as first element', () => {
    const wrapper = mount(<Hint />);
    expect(wrapper.html()).to.equal('<span class="pbg-hint pbg-consumer-desktop"></span>');
  });
});
