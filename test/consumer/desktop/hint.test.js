import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Hint from '../../../components/consumer/desktop/hint';

describe('Hint', () => {
  it('should render desktop hint', () => {
    const wrapper = shallow(<Hint />);
    expect(wrapper.find('div').hasClass('pbg-consumer-desktop')).to.be.true;
  });
});
