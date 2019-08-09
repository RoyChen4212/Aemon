import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BackLink from '../../../components/consumer/mobile/back-link';

describe('back-link', () => {
  it('should have correct class names', () => {
    const label = 'label';
    const href = 'href';
    const wrapper = shallow(<BackLink label={label} href={href} />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-back-link')).to.be.true;
    expect(wrapper.find('.pbg-mobile-label-link').prop('href')).to.equal(href);
    expect(wrapper.find('.pbg-mobile-label-link').text()).to.equal(label);
  });
});
