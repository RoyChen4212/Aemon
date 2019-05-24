import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ClaimToggleContent from '../../../components/consumer/desktop/claim-toggle-content';
import P from '../../../components/consumer/desktop/paragraph';

describe('ClaimToggleContext', () => {
  it('should have correct class name', () => {
    const wrapper = shallow(<ClaimToggleContent />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-claim-toggle-content')).to.be.true;
  });

  it('render a P component when explainer prop is provided', () => {
    const text = 'A explainer';
    const wrapper = shallow(<ClaimToggleContent explainer={text} />);
    const expected = <P>{text}</P>;
    expect(wrapper.contains(expected)).to.be.true;
  });
});
