import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import FormField from '../../../components/consumer/shared/form-field';

export const shouldBehaveLikeFormField = (wrapper) => {
  it('should have class pbg-form-field', () => {
    expect(wrapper.hasClass('pbg-form-field')).to.be.true;
  });

  it('should have correct class when error', () => {
    expect(wrapper.hasClass('pbg-form-field-error')).to.be.true;
  });
};

describe('FormField', () => {
  shouldBehaveLikeFormField(shallow(<FormField error="this is an error" />));

  it('should use prop adapter when provided', () => {
    const onChange = sinon.spy();
    const adapter = sinon.spy((props) => ({ ...props.toAdapt }));
    const props = {
      toAdapt: { onChange },
    };
    const wrapper = shallow(<FormField {...props} adapter={adapter} />)
    wrapper.instance().onChange();
    expect(adapter.called).to.be.true;
    expect(onChange.called).to.be.true;
  });

  it('should throw an error when calling .label directly from the super class', () => {
    const wrapper = shallow(<FormField />);
    const instance = wrapper.instance();
    expect(() => {
      return instance.label;
    }).to.throw('Not implemented, Implement this method in a sub-class.');
  });

  it('should throw an error when calling .hintOrError directly from the super class', () => {
    const wrapper = shallow(<FormField />);
    const instance = wrapper.instance();
    expect(() => {
      return instance.hintOrError;
    }).to.throw('Not implemented, Implement this method in a sub-class.');
  });

  it('should throw an error when calling .hintOrError directly from the super class', () => {
    const wrapper = shallow(<FormField />);
    const instance = wrapper.instance();
    expect(() => {
      return instance.labelType;
    }).to.throw('Not implemented, Implement this method in a sub-class.');
  });
});
