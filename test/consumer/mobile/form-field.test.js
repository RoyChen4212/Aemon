import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FormField from '../../../components/consumer/mobile/form-field';

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
});
