import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { labelTypes } from '../../../components/consumer/mobile/label';
import FormField from '../../../components/consumer/mobile/form-field';

describe('Mobile: FormField', () => {
  it('should implement .label, .hintOrError, .labelType', () => {
    const wrapper = shallow(<FormField />);
    const instance = wrapper.instance();

    expect(() => {
      return instance.label;
    }).to.not.throw;

    expect(() => {
      return instance.hintOrError;
    }).to.not.throw;

    expect(() => {
      return instance.labelType;
    }).to.not.throw;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<FormField className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should return labelType.ERROR  when error', () => {
    const wrapper = shallow(<FormField error="this is an error" />);
    const instance = wrapper.instance();

    expect(instance.labelType).to.equal(labelTypes.ERROR);
  });
});
