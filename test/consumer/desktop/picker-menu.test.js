import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import PickerMenu from '../../../components/consumer/desktop/picker-menu';

describe('PickerMenu', () => {
  it('should have correct class name', () => {
    const wrapper = shallow(<PickerMenu />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-picker-menu')).to.be.true;
  });

  it('should render given options', () => {
    const opts = [{ label: 'option 1', value: 'opt1' }, { label: 'option 2', value: 'opt2' }];
    const wrapper = shallow(<PickerMenu options={opts} />);
    expect(wrapper.find('.picker-item')).to.have.lengthOf(2);
  });

  it('should add picker-item-rounded-top class to first option', () => {
    const opts = [{ label: 'option 1', value: 'opt1' }, { label: 'option 2', value: 'opt2' }];
    const wrapper = shallow(<PickerMenu options={opts} />);
    expect(
      wrapper.find('.picker-item').at(0)
      .hasClass('picker-item-rounded-top')
    ).to.be.true;
  });

  it('should add picker-item-rounded-bottom class to last option', () => {
    const opts = [{ label: 'option 1', value: 'opt1' }, { label: 'option 2', value: 'opt2' }];
    const wrapper = shallow(<PickerMenu options={opts} />);
    expect(
      wrapper.find('.picker-item').at(1)
      .hasClass('picker-item-rounded-bottom')
    ).to.be.true;
  });

  it('should select correct option when selected is given', () => {
    const opts = [{ label: 'option 1', value: 'opt1' }, { label: 'option 2', value: 'opt2' }]
    const selected = opts[1].value;
    const wrapper = shallow(<PickerMenu options={opts} selected={selected} />);
    expect(
      wrapper.find('.picker-item').at(1)
      .hasClass('selected')
    ).to.be.true;
  });

  it('should add class active when given active is true', () => {
    const opts = [{ label: 'option 1', value: 'opt1' }, { label: 'option 2', value: 'opt2' }]
    const wrapper = shallow(<PickerMenu options={opts} active={true} />);
    expect(wrapper.hasClass('active')).to.be.true;
  });

  it('should not add class active when given active is false', () => {
    const opts = [{ label: 'option 1', value: 'opt1' }, { label: 'option 2', value: 'opt2' }]
    const wrapper = shallow(<PickerMenu options={opts} active={false} />);
    expect(wrapper.hasClass('active')).to.be.false;
  });

  it('should call onOptionClick after an option is clicked', () => {
    const opts = [{ label: 'option 1', value: 'opt1' }, { label: 'option 2', value: 'opt2' }];
    const onOptionClick = sinon.spy();
    const wrapper = shallow(<PickerMenu onOptionClick={onOptionClick} options={opts}/>);
    wrapper.find('.picker-item').at(0).simulate('click');
    expect(onOptionClick.calledOnce).to.be.true;
  });
});
