import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ShareLink from '../../../components/consumer/mobile/share-link';

describe('share-link', () => {
  it('should have correct class names', () => {
    const label = 'label';
    const wrapper = shallow(<ShareLink label={label} />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-share-link')).to.be.true;
  });

  it('should have correct link', () => {
    const label = 'label';
    const wrapper = shallow(<ShareLink label={label} />);
    expect(wrapper.find('.pbg-mobile-label-normal').text()).to.equal(label);
  });
});
