import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import PurchaseImage from '../../../components/consumer/desktop/purchase-image';

describe('purchase-image', () => {
  it('should have correct class', () => {
    const wrapper = shallow(<PurchaseImage />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-purchase-image')).to.be.true;
  });

  it('should contain one img element', () => {
    const wrapper = shallow(<PurchaseImage />);
    expect(wrapper.find('img')).to.have.lengthOf(1);
  });

  it('should pass src prop to img element', () => {
    const expected = 'https://picsum.photos/200/100';
    const wrapper = shallow(<PurchaseImage src={expected} />);
    expect(wrapper.find('img').prop('src')).to.equal(expected);
  });
});
