import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ShareLink from '../../../components/consumer/mobile/share-link';

describe('share-link', () => {
  it('should have correct class names', () => {
    const href = 'href';
    const wrapper = shallow(<ShareLink href={href} />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-share-link')).to.be.true;
  });
});
