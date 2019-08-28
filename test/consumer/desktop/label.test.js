import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Label from '../../../components/consumer/desktop/label';

describe('Label', () => {
  it('should render desktop label', () => {
    const wrapper = shallow(<Label />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
  });

  it('should have correct className when provided', () => {
    const className = 'className';
    const wrapper = shallow(<Label className={className} />);
    expect(wrapper.hasClass(className)).to.be.true;
  });
});
