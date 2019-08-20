import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import BaseLabel, { labelClassNames, labelTypes } from '../../../components/consumer/shared/base-label';

describe('BaseLabel', () => {
  it('should render a label tag', () => {
    const wrapper = shallow(<BaseLabel />);
    expect(wrapper.find('label')).to.have.lengthOf(1);
  });

  it('should render with text', () => {
    const expected = 'Some text';
    const wrapper = shallow(<BaseLabel>{expected}</BaseLabel>);
    expect(wrapper.find('label > span').text()).to.equal(expected);
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<BaseLabel className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should have base class when no type is given', () => {
    const wrapper = shallow(<BaseLabel>some text</BaseLabel>);
    expect(wrapper.find('label').hasClass(labelClassNames.base)).to.be.true;
  });

  it('should contain any extra css classes given', () => {
    const expected = 'extra-class';
    const wrapper = shallow(<BaseLabel className={expected}>some text</BaseLabel>);
    expect(wrapper.find('label').hasClass(labelClassNames.base)).to.be.true;
    expect(wrapper.find('label').hasClass(expected)).to.be.true;
  });

  it('should have correct class when strong type', () => {
    const wrapper = shallow(<BaseLabel type={labelTypes.STRONG}>some text</BaseLabel>);
    expect(wrapper.find('label').hasClass(labelClassNames[labelTypes.STRONG])).to.be.true;
  });

  it('should have correct class when secondary type', () => {
    const wrapper = shallow(<BaseLabel type={labelTypes.SECONDARY}>some text</BaseLabel>);
    expect(wrapper.find('label').hasClass(labelClassNames[labelTypes.SECONDARY])).to.be.true;
  });

  it('should have correct class when input type', () => {
    const wrapper = shallow(<BaseLabel type={labelTypes.INPUT}>some text</BaseLabel>);
    expect(wrapper.find('label').hasClass(labelClassNames[labelTypes.INPUT])).to.be.true;
  });

  it('should have correct class when clickable type', () => {
    const wrapper = shallow(<BaseLabel type={labelTypes.CLICKABLE}>some text</BaseLabel>);
    expect(wrapper.find('label').hasClass(labelClassNames[labelTypes.CLICKABLE])).to.be.true;
  });

  it('should contain all correct classes when given className and type', () => {
    const className = 'extra-class';
    const wrapper = shallow(
      <BaseLabel type={labelTypes.STRONG} className={className}>
        some text
      </BaseLabel>
    );
    expect(wrapper.find('label').hasClass(labelClassNames.base)).to.be.true;
    expect(wrapper.find('label').hasClass(className)).to.be.true;
    expect(wrapper.find('label').hasClass(labelClassNames[labelTypes.STRONG])).to.be.true;
  });

  it('should call onClick when when clickable type', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <BaseLabel type={labelTypes.CLICKABLE} onClick={onClick}>
        some text
      </BaseLabel>
    );
    wrapper
      .find('label')
      .find('a')
      .simulate('click');
    expect(onClick.calledOnce).to.be.true;
  });

  it('should add href prop with correct value when provided to clickable type', () => {
    const url = '/some/url';
    const wrapper = shallow(
      <BaseLabel type={labelTypes.CLICKABLE} href={url}>
        some text
      </BaseLabel>
    );
    expect(
      wrapper
        .find('label')
        .find('a')
        .prop('href')
    ).to.equal(url);
  });

  it('should have correct class when active type', () => {
    const wrapper = shallow(<BaseLabel type={labelTypes.ACTIVE}>some text</BaseLabel>);
    expect(wrapper.find('label').hasClass(labelClassNames[labelTypes.ACTIVE])).to.be.true;
  });

  it('should have correct class when active error', () => {
    const wrapper = shallow(<BaseLabel type={labelTypes.ERROR}>some text</BaseLabel>);
    expect(wrapper.find('label').hasClass(labelClassNames[labelTypes.ERROR])).to.be.true;
  });

  it('should have correct class when required prop is passed', () => {
    const wrapper = shallow(<BaseLabel required>some text</BaseLabel>);
    expect(wrapper.find('label').hasClass('required')).to.be.true;
  });
});
