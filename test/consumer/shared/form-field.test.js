import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import BaseFormField from '../../../components/consumer/shared/base-form-field';

export const shouldBehaveLikeFormField = wrapper => {
  it('should have class pbg-form-field', () => {
    expect(wrapper.hasClass('pbg-form-field')).to.be.true;
  });

  it('should have correct class when error', () => {
    wrapper.setProps({ error: 'some error' });
    expect(wrapper.hasClass('pbg-form-field-error')).to.be.true;
  });

  it('should add class disabled if disabled prop is passed', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.hasClass('pbg-form-field-disabled')).to.be.true;
  });
};

describe('BaseFormField', () => {
  shouldBehaveLikeFormField(shallow(<BaseFormField error="this is an error" />));

  it('should use prop adapter when provided', () => {
    const onChange = sinon.spy();
    const adapter = sinon.spy(props => ({ ...props.toAdapt }));
    const props = {
      toAdapt: { onChange },
    };
    const wrapper = shallow(<BaseFormField {...props} adapter={adapter} />);
    wrapper.instance().onChange();
    expect(adapter.called).to.be.true;
    expect(onChange.called).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<BaseFormField className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });
});
