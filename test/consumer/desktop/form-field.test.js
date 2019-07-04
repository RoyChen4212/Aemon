import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FormField from '../../../components/consumer/desktop/form-field';
import { labelTypes } from '../../../components/consumer/shared/base-label';

describe('Desktop: FormField', () => {
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

  it('should return labelType.base even when error', () => {
    const wrapper = shallow(<FormField error="this is an error" />);
    const instance = wrapper.instance();

    expect(instance.labelType).to.equal(labelTypes.base);
  });

  it('should return labelType.BASE when NO error', () => {
    const wrapper = shallow(<FormField />);
    const instance = wrapper.instance();

    expect(instance.labelType).to.equal(labelTypes.BASE);
  });

  it('should render a Label if specified in props', () => {
    const wrapper = shallow(<FormField label="this is a label" />);
    const instance = wrapper.instance();
    const labelWrapper = shallow(instance.renderLabel());

    expect(labelWrapper.html()).to.contain('<label');
  });

  it('should render a placeholder if specified in props', () => {
    const wrapper = shallow(<FormField placeholder="this is a placeholder" />);
    const instance = wrapper.instance();

    expect(instance.placeholder).to.equal('this is a placeholder');
  });

  it('should not render a placeholder if specified in props', () => {
    const wrapper = shallow(<FormField placeholder="this is a placeholder" disabled />);
    const instance = wrapper.instance();

    expect(instance.placeholder).not.to.equal('this is a placeholder');
  });
});
