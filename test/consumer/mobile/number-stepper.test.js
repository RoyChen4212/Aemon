import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NumberStepper from '../../../components/consumer/mobile/number-stepper';
import Picker from '../../../components/consumer/mobile/picker/picker';

describe('simple-number-stepper', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<NumberStepper />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-number-stepper')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<NumberStepper className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should render options based on range', () => {
    const wrapper = shallow(<NumberStepper min={1} max={100} />);

    expect(
      wrapper
        .find(Picker)
        .dive()
        .find('option').length
    ).to.equal(100);
  });
});
