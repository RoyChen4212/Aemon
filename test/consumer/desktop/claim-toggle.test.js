import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import { H3 } from '../../../components/consumer/desktop/heading';
import P from '../../../components/consumer/desktop/paragraph';
import Container from '../../../components/consumer/desktop/container';
import { Checkbox } from '../../../components/consumer/desktop/checkbox';
import ClaimToggle from '../../../components/consumer/desktop/claim-toggle';

describe('ClaimToggle', () => {
  it('should have correct class name', () => {
    const wrapper = shallow(<ClaimToggle />);
    expect(wrapper.hasClass('pbg-claim-toggle')).to.be.true;
  });

  it('should render a stroked Container when is non-required and non-locked', () => {
    const wrapper = shallow(<ClaimToggle required={false} locked={false} />);
    expect(wrapper.find(Container).prop('stroked')).to.be.equal(true);
  });

  it('should render a solid Container when is required', () => {
    const wrapper = shallow(<ClaimToggle required={true} locked={false} />);
    expect(wrapper.find(Container).prop('solid')).to.be.equal(true);
  });

  it('should render a Container with correct class when is required', () => {
    const wrapper = shallow(<ClaimToggle required={true} locked={false} />);
    expect(wrapper.find(Container).hasClass('claim-toggle-required')).to.be.equal(true);
  });

  it('should render a solid Container when is locked', () => {
    const wrapper = shallow(<ClaimToggle required={false} locked={true} />);
    expect(wrapper.find(Container).prop('solid')).to.be.equal(true);
  });

  it('should render a Container with correct class when is locked', () => {
    const wrapper = shallow(<ClaimToggle required={false} locked={true} />);
    expect(wrapper.find(Container).hasClass('claim-toggle-locked')).to.be.equal(true);
  });

  it('should render a Checkbox', () => {
    const wrapper = shallow(<ClaimToggle />);
    expect(wrapper.find(Checkbox)).to.have.lengthOf(1);
  });

  it('should pass the value to the Checkbox', () => {
    const value = true;
    const wrapper = shallow(<ClaimToggle value={value} />);
    expect(wrapper.find(Checkbox).prop('value')).to.be.equal(value);
  });

  it('should disable the Checkbox when is locked', () => {
    const wrapper = shallow(<ClaimToggle locked={true} />);
    expect(wrapper.find(Checkbox).prop('disabled')).to.be.true;
  });

  it('should render a H3 with the label', () => {
    const label = 'label';
    const wrapper = shallow(<ClaimToggle label={label} />);
    expect(wrapper.contains(<H3>{label}</H3>)).to.be.true;
  });

  it('should render a P with the text', () => {
    const text = 'text';
    const wrapper = shallow(<ClaimToggle text={text} />);
    expect(wrapper.contains(<P>{text}</P>)).to.be.true;
  });

  it('reports the value as true upon checking the checkbox', function (done) {
    const onChange = (ev) => {
      expect(ev.target.value).to.be.true;
      done();
    }
    const wrapper = mount(<ClaimToggle value={false} onChange={onChange} />);
    const event = { target: { checked: true } };
    wrapper.find({ type: 'checkbox' }).simulate('change', event);
  });
});
