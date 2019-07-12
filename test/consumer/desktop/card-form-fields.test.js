import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import * as sinon from 'sinon';

import CardField from '../../../components/consumer/desktop/card-field';
import CardFormFields from '../../../components/consumer/desktop/card-form-fields';
import Label from '../../../components/consumer/desktop/label';

describe('CardFormFields', () => {
  const labels = {
    cardNumber: 'Card Number',
    expDate: 'Expiration date',
    securityCode: 'Security code',
    fullName: 'Full name',
    postalCode: 'Postal code',
  };

  it('should have correct class names', () => {
    const wrapper = shallow(<CardFormFields labels={labels} />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-card-form-fields')).to.be.true;
  });

  it('should have correct labels', () => {
    const wrapper = shallow(<CardFormFields labels={labels} />);
    expect(
      wrapper
        .find({ name: 'fullName' })
        .dive()
        .find(Label)
        .prop('children')
    ).to.equal(labels.fullName);
    expect(
      wrapper
        .find({ name: 'expDate' })
        .dive()
        .find(Label)
        .prop('children')
    ).to.equal(labels.expDate);
    expect(
      wrapper
        .find({ name: 'postalCode' })
        .dive()
        .find(Label)
        .prop('children')
    ).to.equal(labels.postalCode);
    expect(wrapper.find('.pbg-label').text()).to.equal(labels.securityCode);
    expect(
      wrapper
        .find(CardField)
        .dive()
        .find('.pbg-desktop-label-normal')
        .text()
    ).to.equal(labels.cardNumber);
  });

  it('should have func validate function', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<CardFormFields labels={labels} onChange={onChange} />);
    wrapper
      .find({ name: 'fullName' })
      .dive()
      .find('input')
      .simulate('change', { target: { value: 'My new value' } });

    wrapper.update();

    expect(onChange.calledOnce).to.be.true;
  });

  it('should be configurable', () => {
    const wrapper = shallow(<CardFormFields labels={labels} config={['cardNumber', 'fullName', 'expDate']} />);

    expect(wrapper.find(CardField).length).to.equal(1);
    expect(wrapper.find({ name: 'fullName' }).length).to.equal(1);
    expect(wrapper.find({ name: 'expDate' }).length).to.equal(1);
    expect(wrapper.find({ name: 'securityCode' }).length).to.equal(0);
    expect(wrapper.find({ name: 'postalCode' }).length).to.equal(0);
  });
});
