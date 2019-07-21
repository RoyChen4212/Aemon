import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PurchaseImage from '../../../components/consumer/mobile/purchase-image';

describe('purchase-image', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<PurchaseImage />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-purchase-image')).to.be.true;
  });

  it('should have correct image', () => {
    const src = 'src';
    const wrapper = shallow(<PurchaseImage src={src} />);

    expect(wrapper.find('div').prop('style').backgroundImage).to.equal(`url(${src})`);
  });
});
