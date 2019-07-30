import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SimpleNumberStepper from '../../../components/consumer/mobile/simple-number-stepper';
import Picker from '../../../components/consumer/mobile/picker/picker';

describe('simple-number-stepper', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<SimpleNumberStepper />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-simple-number-stepper')).to.be.true;
  });

  it('should render options based on range', () => {
    const wrapper = shallow(<SimpleNumberStepper min={1} max={100} />);

    expect(
      wrapper
        .find(Picker)
        .dive()
        .find('option').length
    ).to.equal(100);
  });
});
