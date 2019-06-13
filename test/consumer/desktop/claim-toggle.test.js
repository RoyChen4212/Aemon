import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Container from '../../../components/consumer/desktop/container';
import ClaimToggleContent from '../../../components/consumer/desktop/claim-toggle-content';
import ClaimToggle from '../../../components/consumer/desktop/claim-toggle';

describe('ClaimToggle', () => {
  it('should have correct class name', () => {
    const wrapper = shallow(<ClaimToggle />);
    expect(wrapper.hasClass('pbg-claim-toggle')).to.be.true;
  });

  it('should render a stroked Container when is non-required and non-disabled', () => {
    const wrapper = shallow(<ClaimToggle required={false} disabled={false} />);
    expect(wrapper.find(Container).prop('stroked')).to.be.equal(true);
  });

  it('should render a solid Container when is required', () => {
    const wrapper = shallow(<ClaimToggle required disabled={false} />);
    expect(wrapper.find(Container).prop('solid')).to.be.equal(true);
  });

  it('should render a Container with correct class when is required', () => {
    const wrapper = shallow(<ClaimToggle required disabled={false} />);
    expect(wrapper.find(Container).hasClass('claim-toggle-required')).to.be.equal(true);
  });

  it('should render a solid Container when is disabled', () => {
    const wrapper = shallow(<ClaimToggle required={false} disabled />);
    expect(wrapper.find(Container).prop('solid')).to.be.equal(true);
  });

  it('should render a Container with correct class when is disabled', () => {
    const wrapper = shallow(<ClaimToggle required={false} disabled />);
    expect(wrapper.find(Container).hasClass('claim-toggle-disabled')).to.be.equal(true);
  });

  it('should render a ClaimToggleContent', () => {
    const wrapper = shallow(<ClaimToggle />);
    expect(wrapper.find(ClaimToggleContent)).to.have.lengthOf(1);
  });

  it('should pass value prop to the ClaimToggleContent', () => {
    const value = true;
    const wrapper = shallow(<ClaimToggle value={value} />);
    expect(wrapper.find(ClaimToggleContent).prop('value')).to.be.equal(value);
  });

  it('should pass disable prop to the ClaimToggleContent', () => {
    const disabled = true;
    const wrapper = shallow(<ClaimToggle disabled={disabled} />);
    expect(wrapper.find(ClaimToggleContent).prop('disabled')).to.be.equal(disabled);
  });

  it('should pass label prop to the ClaimToggleContent', () => {
    const label = 'label';
    const wrapper = shallow(<ClaimToggle label={label} />);
    expect(wrapper.find(ClaimToggleContent).prop('label')).to.be.equal(label);
  });

  it('should pass explainer prop to the ClaimToggleContent', () => {
    const explainer = 'explainer';
    const wrapper = shallow(<ClaimToggle explainer={explainer} />);
    expect(wrapper.find(ClaimToggleContent).prop('explainer')).to.be.equal(explainer);
  });

  it('should pass error prop to the ClaimToggleContent', () => {
    const error = 'error';
    const wrapper = shallow(<ClaimToggle error={error} />);
    expect(wrapper.find(ClaimToggleContent).prop('error')).to.be.equal(error);
  });

  it('reports the value as true upon checking the checkbox', (done) => {
    const onChange = ev => {
      expect(ev.target.value).to.be.true;
      done();
    };
    const wrapper = mount(<ClaimToggle value={false} onChange={onChange} />);
    const event = { target: { checked: true } };
    wrapper.find({ type: 'checkbox' }).simulate('change', event);
  });
});
