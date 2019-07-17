import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import PickerMenu from '../../../components/consumer/desktop/picker-menu';
import Label, { labelTypes } from '../../../components/consumer/desktop/label';

describe('PickerMenu', () => {
  const opts = [
    { label: { term: 'option 1' }, value: 'opt1' },
    {
      label: { term: 'option 2', desc: 'this is the option 2' },
      value: 'opt2',
    },
  ];

  it('should have correct class name', () => {
    const wrapper = shallow(<PickerMenu />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-picker-menu')).to.be.true;
  });

  it('should render given options', () => {
    const wrapper = shallow(<PickerMenu options={opts} />);
    expect(wrapper.find('.picker-menu-item')).to.have.lengthOf(2);
  });

  it('should add picker-menu-item-term class to given options', () => {
    const wrapper = shallow(<PickerMenu options={opts} />);
    expect(wrapper.find('.picker-menu-item .picker-menu-item-term')).to.have.lengthOf(2);
  });

  it('should add picker-menu-item-desc class to options with desc', () => {
    const wrapper = shallow(<PickerMenu options={opts} />);
    expect(wrapper.find('.picker-menu-item .picker-menu-item-desc')).to.have.lengthOf(1);
  });

  it('should add picker-menu-item-rounded-top class to first option', () => {
    const wrapper = shallow(<PickerMenu options={opts} />);
    expect(
      wrapper
        .find('.picker-menu-item')
        .at(0)
        .hasClass('picker-menu-item-rounded-top')
    ).to.be.true;
  });

  it('should add picker-menu-item-rounded-bottom class to last option', () => {
    const wrapper = shallow(<PickerMenu options={opts} />);
    expect(
      wrapper
        .find('.picker-menu-item')
        .at(1)
        .hasClass('picker-menu-item-rounded-bottom')
    ).to.be.true;
  });

  it('should select correct option when selected is given', () => {
    const selected = opts[1].value;
    const wrapper = shallow(<PickerMenu options={opts} selected={selected} />);
    expect(
      wrapper
        .find('.picker-menu-item')
        .at(1)
        .hasClass('selected')
    ).to.be.true;
  });

  it('should use clickable label for selected option', () => {
    const selected = opts[0].value;
    const wrapper = shallow(<PickerMenu options={opts} selected={selected} />);
    expect(
      wrapper
        .find('.picker-menu-item')
        .at(0)
        .find(Label)
        .prop('type')
    ).to.equal(labelTypes.CLICKABLE);
  });

  it('should add class active when given active is true', () => {
    const wrapper = shallow(<PickerMenu options={opts} active />);
    expect(wrapper.hasClass('active')).to.be.true;
  });

  it('should not add class active when given active is false', () => {
    const wrapper = shallow(<PickerMenu options={opts} active={false} />);
    expect(wrapper.hasClass('active')).to.be.false;
  });

  it('should call onOptionClick after an option is clicked', () => {
    const onOptionClick = sinon.spy();
    const wrapper = shallow(<PickerMenu onOptionClick={sinon.fake.returns(onOptionClick)} options={opts} />);
    wrapper
      .find('.picker-menu-item')
      .at(0)
      .simulate('click');
    expect(onOptionClick.calledOnce).to.be.true;
  });

  it('should call onBlur when outside clicked', (done) => {
    const onBlur = () =>  {
      done();
    };
    const wrapper = mount(<PickerMenu active onBlur={onBlur} options={opts} />);
    wrapper
    .find('.pbg-picker-menu')
    .find('.picker-blur-imitation')
    .simulate('click');
  });
});
