import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import DivInput from '../../../components/consumer/mobile/div-input';

describe('div-input', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<DivInput />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-div-input')).to.be.true;
  });

  it('should render a label if given', () => {
    const labelText = 'Label';
    const wrapper = shallow(<DivInput label={labelText} />);
    const label = wrapper.find('.pbg-mobile-label-normal');
    expect(label).to.have.lengthOf(1);
    expect(label.text()).to.equal(labelText);
  });

  it('should set htmlId if given', () => {
    const wrapper = shallow(<DivInput htmlId="card-field" />);
    expect(wrapper.find('#card-field')).to.have.lengthOf(1);
  });

  it('should have focused class if focused', () => {
    const wrapper = shallow(<DivInput focused />);
    expect(wrapper.find('.pbg-div-input-field-focused')).to.have.lengthOf(1);
  });

  it('should not have focused class if not focused', () => {
    const wrapper = shallow(<DivInput focused={false} />);
    expect(wrapper.find('.pbg-div-input-field-focused')).to.have.lengthOf(0);
  });

  it('should not render a label if not given', () => {
    const wrapper = shallow(<DivInput />);
    expect(wrapper.find('.pbg-mobile-label-normal')).to.have.lengthOf(0);
  });

  it('should render error if given', () => {
    const errorText = 'Error';
    const wrapper = shallow(<DivInput error={errorText} />);
    const error = wrapper.find('.pbg-mobile-small-error');
    expect(error).to.have.lengthOf(1);
    expect(error.text()).to.equal(errorText);
  });

  it('should not render error if not given', () => {
    const wrapper = shallow(<DivInput />);
    const error = wrapper.find('.pbg-mobile-small-error');
    expect(error).to.have.lengthOf(0);
  });
});
