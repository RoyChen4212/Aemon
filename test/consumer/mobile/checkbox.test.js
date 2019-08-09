import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { shouldBehaveLikeFormField } from '../shared/form-field.test';
import Checkbox from '../../../components/consumer/mobile/checkbox';

describe('Checkbox', () => {
  shouldBehaveLikeFormField(shallow(<Checkbox error="some error" />));

  it('should have correct class name', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-checkbox')).to.be.true;
  });

  it('render a checkbox element', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.find('input[type="checkbox"]')).to.have.lengthOf(1);
  });

  it('render a label component when label prop is provided', () => {
    const text = 'A label';
    const wrapper = shallow(<Checkbox label={text} />);
    expect(wrapper.find('.pbg-checkbox-label-text').text()).to.equal(text);
  });

  it('checks the checkbox if true is passed as value', () => {
    const wrapper = shallow(<Checkbox value />);
    expect(wrapper.find({ type: 'checkbox' }).props().defaultChecked).to.be.true;
  });

  it('checkbox not checked if false is passed as value', () => {
    const wrapper = shallow(<Checkbox value={false} />);
    expect(wrapper.find({ type: 'checkbox' }).props().defaultChecked).to.be.false;
  });

  it('checkbox not checked if no value is passed', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.find({ type: 'checkbox' }).props().defaultChecked).to.be.false;
  });

  it('reports the value as true upon checking the checkbox', done => {
    const onChange = ev => {
      expect(ev.target.checked).to.be.true;
      done();
    };
    const wrapper = shallow(<Checkbox onChange={onChange} />);
    const event = { target: { checked: true } };
    wrapper.find({ type: 'checkbox' }).simulate('change', event);
  });
});
