import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import SimpleNumberStepper from '../../../components/consumer/desktop/simple-number-stepper';
import makeEvent from '../../../components/lib/make-event';
import { shouldBehaveLikeFormField } from '../shared/form-field.test';

describe('SimpleNumberStepper', () => {
  shouldBehaveLikeFormField(shallow(<SimpleNumberStepper />));

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

  it('should not update value when a boundary is met', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<SimpleNumberStepper value={0} min={0} onChange={onChange} />);
    wrapper.find('.decrement').simulate('click');
    expect(onChange.calledOnce).to.be.false;
  });

  it('should decrement value upon - click', () => {
    const onChange = sinon.spy();
    const props = { ...baseProps, value: 5, onChange };
    const wrapper = mount(<SimpleNumberStepper {...props} />);
    wrapper.find('.decrement').simulate('click');
    expect(onChange.calledOnce).to.be.true;
    expect(onChange.calledWith(makeEvent(props.value - 1)));
  });

  it('should increment value upon + click', () => {
    const onChange = sinon.spy();
    const props = { ...baseProps, value: 5, onChange };
    const wrapper = mount(<SimpleNumberStepper {...props} />);
    wrapper.find('.increment').simulate('click');
    expect(onChange.calledOnce).to.be.true;
    expect(onChange.calledWith(makeEvent(props.value + 1)));
  });
});
