import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Hint from '../../../components/consumer/mobile/hint';

describe('Mobile Hint', () => {
  it('should render mobile hint', () => {
    const wrapper = shallow(<Hint />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<Hint className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should render span tag as first element', () => {
    const wrapper = mount(<Hint />);
    expect(wrapper.html()).to.equal('<span class="pbg-hint pbg-consumer-mobile"></span>');
  });

  it('should accept a multiline prop that turns it into p', () => {
    const wrapper = shallow(<Hint multiline />);
    expect(wrapper.html()).to.equal('<p class="pbg-hint pbg-consumer-mobile"></p>');
  });
});
