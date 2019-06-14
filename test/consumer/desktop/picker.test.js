import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import { shouldBehaveLikeFormField } from '../shared/form-field.test';
import Picker, { PICKER_EMPTY_VALUE } from '../../../components/consumer/desktop/picker';
import Label from '../../../components/consumer/desktop/label';
import Hint, { hintTypes } from '../../../components/consumer/desktop/hint';
import PickerMenu from '../../../components/consumer/desktop/picker-menu';

describe('Picker', () => {
  shouldBehaveLikeFormField(shallow(<Picker error="some error" />));

  it('should have correct class name', () => {
    const wrapper = shallow(<Picker />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-picker')).to.be.true;
  });

  it('should render a button', () => {
    const wrapper = shallow(<Picker />);
    expect(wrapper.find('button')).to.have.lengthOf(1);
  });

  it('should render a button with correct class name if button prop is false', () => {
    const wrapper = shallow(<Picker button={false} />);
    expect(wrapper.find('button').hasClass('pbg-picker-text')).to.be.true;
  });

  it('should render a button with correct class name if button prop is true', () => {
    const wrapper = shallow(<Picker button />);
    expect(wrapper.find('button').hasClass('pbg-picker-button')).to.be.true;
  });

  it('should render given options', () => {
    const opts = [{ label: { term: 'option 1' }, value: 'opt1' }, { label: { term: 'option 2' }, value: 'opt2' }];
    const wrapper = mount(<Picker options={opts} />);
    expect(wrapper.find('.pbg-picker-menu').find('.picker-menu-item')).to.have.lengthOf(2);
  });

  it('should render the correct label', () => {
    const labelText = 'Pick your posion';
    const wrapper = shallow(<Picker label={labelText} />);
    expect(wrapper.find('.pbg-picker').contains(<Label>{labelText}</Label>)).to.be.true;
  });

  it('should render the a hint if given', () => {
    const hintText = 'Pick your posion';
    const wrapper = shallow(<Picker hint={hintText} />);
    expect(wrapper.find('.pbg-picker').contains(<Hint>{hintText}</Hint>)).to.be.true;
  });

  it('should have correct class when error is given', () => {
    const wrapper = shallow(<Picker error="an error" />);
    expect(wrapper.hasClass('pbg-form-field-error')).to.be.true;
  });

  it('should render the an error if given', () => {
    const error = 'terrible error';
    const wrapper = shallow(<Picker error={error} />);
    expect(wrapper.find('.pbg-picker').contains(<Hint type={hintTypes.ERROR}>{error}</Hint>)).to.be.true;
  });

  it('should render the an error if given despite a hint being passed', () => {
    const error = 'terrible error';
    const wrapper = shallow(<Picker error={error} hint="hint" />);
    expect(wrapper.find('.pbg-picker').contains(<Hint type={hintTypes.ERROR}>{error}</Hint>)).to.be.true;
  });

  it('should render a custom arrow element', () => {
    const wrapper = shallow(<Picker />);
    const el = wrapper
      .find('.pbg-picker')
      .find('button')
      .find('.pbg-picker-arrow');
    expect(el).to.have.lengthOf(1);
  });

  it('should use required label if required prop passed', () => {
    const labelText = 'Pick your posion';
    const wrapper = shallow(<Picker label={labelText} required />);
    expect(wrapper.find('.pbg-picker').contains(<Label required>{labelText}</Label>)).to.be.true;
  });

  it('should not use required label if required prop not passed', () => {
    const labelText = 'Pick your posion';
    const wrapper = shallow(<Picker label={labelText} />);
    expect(wrapper.find('.pbg-picker').contains(<Label required>{labelText}</Label>)).to.be.false;
  });

  it('should call onChange after select is changed', () => {
    const opts = [{ label: { term: 'option 1' }, value: 'opt1' }, { label: { term: 'option 2' }, value: 'opt2' }];
    const onChange = sinon.spy();
    const wrapper = mount(<Picker onChange={onChange} options={opts} />);
    wrapper
      .find('.pbg-picker-menu')
      .find('.picker-menu-item')
      .at(0)
      .simulate('click');
    expect(onChange.calledOnce).to.be.true;
  });

  it('should call onChange with correct value if value is null', done => {
    const opts = [{ label: { term: 'option 1' }, value: 'opt1' }, { label: { term: 'option 2' }, value: null }];
    const onChange = ev => {
      expect(ev.target.value).to.equal(null);
      done();
    };
    const wrapper = mount(<Picker onChange={onChange} options={opts} />);
    wrapper
      .find('.pbg-picker-menu')
      .find('.picker-menu-item')
      .at(1)
      .simulate('click');
  });

  it('should call onChange with correct value if value is PICKER_EMPTY_VALUE', done => {
    const opts = [
      { label: { term: 'option 1' }, value: 'opt1' },
      { label: { term: 'option 2' }, value: PICKER_EMPTY_VALUE },
    ];
    const onChange = ev => {
      expect(ev.target.value).to.equal(null);
      done();
    };
    const wrapper = mount(<Picker onChange={onChange} options={opts} />);
    wrapper
      .find('.pbg-picker-menu')
      .find('.picker-menu-item')
      .at(1)
      .simulate('click');
  });

  it('should call onFocus', () => {
    const onFocus = sinon.spy();
    const wrapper = mount(<Picker onFocus={onFocus} />);
    wrapper.find('button').simulate('focus');
    expect(onFocus.calledOnce).to.be.true;
  });

  it('should return PICKER_EMPTY_VALUE when value is null', () => {
    const wrapper = shallow(<Picker value={null} />);
    expect(wrapper.instance().value).to.equal(PICKER_EMPTY_VALUE);
  });

  it('should select correct option when value is given', () => {
    const opts = [{ label: { term: 'option 1' }, value: 'opt1' }, { label: { term: 'option 2' }, value: 'opt2' }];
    const { value } = opts[1];
    const wrapper = mount(<Picker options={opts} value={value} />);
    expect(wrapper.find('button').text()).to.be.equal(opts[1].label.term);
  });

  it('should activate PickerMenu upon clicking button', () => {
    const opts = [{ label: { term: 'option 1' }, value: 'opt1' }, { label: { term: 'option 2' }, value: 'opt2' }];
    const wrapper = shallow(<Picker options={opts} />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find(PickerMenu).prop('active')).to.be.equal(true);
  });

  it('should deactivate PickerMenu upon blurring button', done => {
    const opts = [{ label: { term: 'option 1' }, value: 'opt1' }, { label: { term: 'option 2' }, value: 'opt2' }];
    const onBlur = wrapper => {
      expect(wrapper.find(PickerMenu).prop('active')).to.be.equal(false);
      done();
    };
    const wrapper = shallow(<Picker options={opts} onBlur={() => onBlur(wrapper)} />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find(PickerMenu).prop('active')).to.be.equal(true);
    wrapper.find('button').simulate('blur');
  });

  it('should not be activable when disabled', () => {
    const opts = [{ label: { term: 'option 1' }, value: 'opt1' }, { label: { term: 'option 2' }, value: 'opt2' }];
    const wrapper = shallow(<Picker options={opts} disabled />);
    expect(wrapper.find(PickerMenu).prop('active')).to.be.equal(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.find(PickerMenu).prop('active')).to.be.equal(false);
  });

  it('should not execute deactivate code if disabled', () => {
    const wrapper = shallow(<Picker disabled />);
    expect(wrapper.instance().deactivate()).to.be.false;
  });

  it('should have no label when simple', () => {
    const wrapper = shallow(<Picker simple label="Some label" />);
    expect(wrapper.find('.pbg-picker').find(Label)).to.have.lengthOf(0);
  });

  it('should have no hint when simple', () => {
    const wrapper = shallow(<Picker simple hint="Some hint" />);
    expect(wrapper.find('.pbg-picker').find(Hint)).to.have.lengthOf(0);
  });

  it('should add class pbg-picker-big if big property is given', () => {
    const wrapper = shallow(<Picker big />);
    expect(wrapper.hasClass('pbg-picker-big')).to.be.true;
  });
});
