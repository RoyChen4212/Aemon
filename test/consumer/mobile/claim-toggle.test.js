import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ClaimToggle from '../../../components/consumer/mobile/claim-toggle';

describe('claim-toggle', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<ClaimToggle />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-claim-toggle')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<ClaimToggle className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should render secondaryText if its available', () => {
    const secondaryText = 'secondaryText';
    const wrapper = shallow(<ClaimToggle secondaryText={secondaryText} />);
    const text = wrapper.find('.pbg-claim-toggle-secondary-text');
    expect(text.length).to.equal(1);
    expect(text.text()).to.equal(secondaryText);
  });

  it('should render error on error state', () => {
    const secondaryText = 'secondaryText';
    const wrapper = shallow(<ClaimToggle secondaryText={secondaryText} error />);
    const text = wrapper.find('.pbg-claim-toggle-primary-text');
    expect(text.hasClass('error')).to.be.true;
  });
});
