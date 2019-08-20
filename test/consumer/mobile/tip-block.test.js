import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TipBlock from '../../../components/consumer/mobile/tip-block';
import { colorTypes } from '../../../components/consumer/shared/color-types';
import { iconTypes } from '../../../components/consumer/shared/icon-types';

describe('TipBlock', () => {
  it('should have correct class', () => {
    const wrapper = shallow(<TipBlock title="title" description="description" />);
    expect(wrapper.hasClass('pbg-tip-block')).to.be.true;
  });

  it('should render the icon without props', () => {
    const wrapper = shallow(<TipBlock title="title" description="description" />);
    expect(wrapper.find('i').length).to.equal(1);
    expect(wrapper.find('i').hasClass(`pbg-icon-${iconTypes.QUESTION_MARK}-small-gray`)).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<TipBlock className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should render the icon exactly', () => {
    const icon = iconTypes.ADD_USER;
    const wrapper = shallow(<TipBlock title="title" description="description" icon={icon} />);
    expect(wrapper.find('i').length).to.equal(1);
    expect(wrapper.find('i').hasClass(`pbg-icon-${icon}-small-gray`)).to.be.true;
  });

  it('should render default background color', () => {
    const color = colorTypes.GRAY_10;
    const wrapper = shallow(<TipBlock title="title" description="description" />);
    expect(wrapper.hasClass(`pbg-bg-color-${color}`)).to.be.true;
  });

  it('should render correct background color', () => {
    const color = colorTypes.RED_10;
    const wrapper = shallow(<TipBlock title="title" description="description" color={color} />);
    expect(wrapper.hasClass(`pbg-bg-color-${color}`)).to.be.true;
  });

  it('should render title exactly', () => {
    const wrapper = shallow(<TipBlock title="title" description="description" />);
    expect(
      wrapper
        .find('.pbg-tip-block-title-wrapper')
        .find('.pbg-mobile-label-strong')
        .text()
    ).to.equal('title');
  });

  it('should render description exactly', () => {
    const wrapper = shallow(<TipBlock title="title" description="description" />);
    expect(wrapper.find('.pbg-mobile-paragraph').text()).to.equal('description');
  });
});
