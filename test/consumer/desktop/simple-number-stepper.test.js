import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import SimpleNumberStepper from '../../../components/consumer/desktop/simple-number-stepper';

describe('SimpleNumberStepper', () => {
  const baseProps = {
    min: 1,
    max: 7,
    onBlur: () => {},
    onChange: () => {},
  };

  it('should render two <button /> elements', () => {
    const wrapper = shallow(<SimpleNumberStepper />);
    expect(wrapper.find('button')).to.have.length(2);
  });

  it('should render one disabled <input /> element', () => {
    const wrapper = shallow(<SimpleNumberStepper />);
    expect(wrapper.find('input')).to.have.length(1);
    expect(wrapper.find('input').prop('disabled')).to.equal(true);
  });

  it('should have a default value of 0', () => {
    const wrapper = shallow(<SimpleNumberStepper />);
    expect(wrapper.state('value')).to.equal(0);
  });

  it('should have a given value', () => {
    const props = { value: 5 };
    const wrapper = shallow(<SimpleNumberStepper {...props} />);
    expect(wrapper.state('value')).to.equal(props.value);
  });

  it('should decrement value upon - click', () => {
    const props = { ...baseProps, value: 5 };
    const wrapper = mount(<SimpleNumberStepper {...props} />);
    wrapper.find('.decrement').simulate('click');
    expect(wrapper.state('value')).to.equal(props.value - 1);
  });

  it('should increment value upon + click', () => {
    const props = { ...baseProps, value: 5 };
    const wrapper = mount(<SimpleNumberStepper {...props} />);
    wrapper.find('.increment').simulate('click');
    expect(wrapper.state('value')).to.equal(props.value + 1);
  });

  it('should call onChange after it decrements', () => {
    const onChange = sinon.spy();
    const props = { ...baseProps, onChange, value: 5 };
    const wrapper = mount(<SimpleNumberStepper {...props} />);
    wrapper.find('.decrement').simulate('click');
    expect(onChange.calledOnce).to.equal(true);
  });

  it('should call onChange after it increments', () => {
    const onChange = sinon.spy();
    const props = { ...baseProps, onChange, value: 5 };
    const wrapper = mount(<SimpleNumberStepper {...props} />);
    wrapper.find('.decrement').simulate('click');
    expect(onChange.calledOnce).to.equal(true);
  });
});