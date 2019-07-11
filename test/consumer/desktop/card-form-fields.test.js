import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CardField from '../../../components/consumer/desktop/card-field';
import CardFormFields from '../../../components/consumer/desktop/card-form-fields';
import StateProvider from '../../../stories/util/field-state-provider';
import TextField from '../../../components/consumer/desktop/text-field';

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
    const fields = wrapper.find(StateProvider);

    expect(
      fields
        .find({ name: 'fullName' })
        .dive()
        .find(TextField)
        .prop('label')
    ).to.equal(labels.fullName);
    expect(
      fields
        .find({ name: 'expDate' })
        .dive()
        .find(TextField)
        .prop('label')
    ).to.equal(labels.expDate);
    expect(
      fields
        .find({ name: 'postalCode' })
        .dive()
        .find(TextField)
        .prop('label')
    ).to.equal(labels.postalCode);
    expect(
      fields
        .find({ name: 'secCode' })
        .dive()
        .find(TextField)
        .prop('label')
    ).to.equal(labels.securityCode);
    expect(
      wrapper
        .find(CardField)
        .dive()
        .find('.pbg-desktop-label-normal')
        .text()
    ).to.equal(labels.cardNumber);
  });
});
