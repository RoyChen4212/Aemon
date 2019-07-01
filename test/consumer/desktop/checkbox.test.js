import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { shouldBehaveLikeFormField } from '../shared/form-field.test';
import { Checkbox } from '../../../components/consumer/desktop/checkbox';
import Label, { labelTypes } from '../../../components/consumer/desktop/label';
import Hint from '../../../components/consumer/desktop/hint';

describe('Checkbox', () => {
  shouldBehaveLikeFormField(shallow(<Checkbox error="some error" />));

  it('should have correct class name', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
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

  it('render a hint component when hint prop is provided', () => {
    const text = 'A hint';
    const wrapper = shallow(<Checkbox hint={text} />);
    const expected = <Hint>{text}</Hint>;
    expect(wrapper.contains(expected)).to.be.true;
  });

  it('render an error label component when error prop is provided', () => {
    const text = 'error';
    const wrapper = shallow(<Checkbox label={text} error="some error" />);
    const expected = <Label type={labelTypes.ERROR}>{text}</Label>;
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

  it('should disable input if disabled prop is passed', () => {
    const wrapper = shallow(<Checkbox disabled />);
    expect(wrapper.find({ type: 'checkbox' }).prop('disabled')).to.be.true;
  });
});
