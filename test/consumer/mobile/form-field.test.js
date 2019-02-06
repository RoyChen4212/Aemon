import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FormField from '../../../components/consumer/mobile/form-field';

describe('Mobile: FormField', () => {
  it('should implement .label, .hintOrError, .labelType', () => {
    const wrapper = shallow(<FormField />)
    const instance = wrapper.instance();

    expect(() => {
      return instance.label
    }).to.not.throw;

    expect(() => {
      return instance.hintOrError
    }).to.not.throw;

    expect(() => {
      return instance.labelType
    }).to.not.throw;
  });
});
