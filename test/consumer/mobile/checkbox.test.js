import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { shouldBehaveLikeFormField } from '../shared/form-field.test';
import { Checkbox } from '../../../components/consumer/mobile/form-fields';
import Label from '../../../components/consumer/mobile/label';

describe('Checkbox', () => {
  shouldBehaveLikeFormField(shallow(<Checkbox error="some error" />));

  it('should have correct class name', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.hasClass('pbg-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-checkbox')).to.be.true;
  });

  it('render a checkbox element', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.find('input[type="checkbox"]')).to.have.lengthOf(1);
  });

  it('render a label component when label prop is provided', () => {
    const text = 'A label';
    const wrapper = shallow(<Checkbox label={text} />);
    const expected = <Label>{text}</Label>;
    expect(wrapper.contains(expected)).to.be.true;
  });

  it('checks the checkbox if true is passed as value', () => {
    const wrapper = shallow(<Checkbox value />);
    expect(wrapper.find({ type: 'checkbox' }).props().checked).to.be.true;
  });

  it('checkbox not checked if false is passed as value', () => {
    const wrapper = shallow(<Checkbox value={false} />);
    expect(wrapper.find({ type: 'checkbox' }).props().checked).to.be.false;
  });

  it('checkbox not checked if no value is passed', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.find({ type: 'checkbox' }).props().checked).to.be.false;
  });

  it('reports the value as true upon checking the checkbox', done => {
    const onChange = ev => {
      expect(ev.target.value).to.be.true;
      done();
    };
    const wrapper = shallow(<Checkbox onChange={onChange} />);
    const event = { target: { checked: true } };
    wrapper.find({ type: 'checkbox' }).simulate('change', event);
  });
});
