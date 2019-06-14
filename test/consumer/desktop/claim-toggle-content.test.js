import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ClaimToggleContent from '../../../components/consumer/desktop/claim-toggle-content';

describe('ClaimToggleContext', () => {
  it('should have correct class name', () => {
    const wrapper = shallow(<ClaimToggleContent />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-claim-toggle-content')).to.be.true;
  });

  it('renders explainer when the prop is provided', () => {
    const text = 'A explainer';
    const wrapper = shallow(<ClaimToggleContent explainer={text} />);
    expect(wrapper.contains(text)).to.be.true;
  });
});
