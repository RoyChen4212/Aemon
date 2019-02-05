import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Label from '../../../components/consumer/desktop/label';

describe('Label', () => {
  it('should render desktop label', () => {
    const wrapper = shallow(<Label />);
    expect(wrapper.find('div').hasClass('pbg-consumer-desktop')).to.be.true;
  });
});
