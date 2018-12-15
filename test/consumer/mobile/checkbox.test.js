import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { shouldBehaveLikeFormField } from './form-field.test';
import { Checkbox } from '../../../components/consumer/mobile/form-fields';
import Label from '../../../components/consumer/mobile/label';

describe('Checkbox', () => {
  shouldBehaveLikeFormField(shallow(<Checkbox error="some error" />));

  it('render a checkbox element', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.find('input[type="checkbox"]')).to.have.lengthOf(1);
  });

  it('render a label component when label prop is provided', () => {
    const expected = 'A label';
    const wrapper = shallow(<Checkbox label={expected} />);
    expect(wrapper.find(Label)).to.have.lengthOf(1);
    expect(wrapper.find('label').text()).to.equal(expected);
  });
});