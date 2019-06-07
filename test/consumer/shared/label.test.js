import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Label, {
  labelClassNames,
  labelTypes,
} from '../../../components/consumer/shared/label';

describe('Label', () => {
  it('should render a label tag', () => {
    const wrapper = shallow(<Label />);
    expect(wrapper.find('label')).to.have.lengthOf(1);
  });

  it('should render with text', () => {
    const expected = 'Some text';
    const wrapper = shallow(<Label>{expected}</Label>);
    expect(wrapper.find('label > span').text()).to.equal(expected);
  });

  it('should have base class when no type is given', () => {
    const wrapper = shallow(<Label>some text</Label>);
    expect(wrapper.find('label').hasClass(labelClassNames.base)).to.be.true;
  });

  it('should contain any extra css classes given', () => {
    const expected = 'extra-class';
    const wrapper = shallow(<Label className={expected}>some text</Label>);
    expect(wrapper.find('label').hasClass(labelClassNames.base)).to.be.true;
    expect(wrapper.find('label').hasClass(expected)).to.be.true;
  });

  it('should have correct class when strong type', () => {
    const wrapper = shallow(<Label type={labelTypes.STRONG}>some text</Label>);
    expect(wrapper.find('label').hasClass(labelClassNames[labelTypes.STRONG]))
      .to.be.true;
  });

  it('should have correct class when secondary type', () => {
    const wrapper = shallow(
      <Label type={labelTypes.SECONDARY}>some text</Label>
    );
    expect(
      wrapper.find('label').hasClass(labelClassNames[labelTypes.SECONDARY])
    ).to.be.true;
  });

  it('should have correct class when input type', () => {
    const wrapper = shallow(<Label type={labelTypes.INPUT}>some text</Label>);
    expect(wrapper.find('label').hasClass(labelClassNames[labelTypes.INPUT])).to
      .be.true;
  });

  it('should have correct class when clickable type', () => {
    const wrapper = shallow(
      <Label type={labelTypes.CLICKABLE}>some text</Label>
    );
    expect(
      wrapper.find('label').hasClass(labelClassNames[labelTypes.CLICKABLE])
    ).to.be.true;
  });

  it('should contain all correct classes when given className and type', () => {
    const className = 'extra-class';
    const wrapper = shallow(
      <Label type={labelTypes.STRONG} className={className}>
        some text
      </Label>
    );
    expect(wrapper.find('label').hasClass(labelClassNames.base)).to.be.true;
    expect(wrapper.find('label').hasClass(className)).to.be.true;
    expect(wrapper.find('label').hasClass(labelClassNames[labelTypes.STRONG]))
      .to.be.true;
  });

  it('should call onClick when when clickable type', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <Label type={labelTypes.CLICKABLE} onClick={onClick}>
        some text
      </Label>
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
      <Label type={labelTypes.CLICKABLE} href={url}>
        some text
      </Label>
    );
    expect(
      wrapper
        .find('label')
        .find('a')
        .prop('href')
    ).to.equal(url);
  });

  it('should have correct class when active type', () => {
    const wrapper = shallow(<Label type={labelTypes.ACTIVE}>some text</Label>);
    expect(wrapper.find('label').hasClass(labelClassNames[labelTypes.ACTIVE]))
      .to.be.true;
  });

  it('should have correct class when active error', () => {
    const wrapper = shallow(<Label type={labelTypes.ERROR}>some text</Label>);
    expect(wrapper.find('label').hasClass(labelClassNames[labelTypes.ERROR])).to
      .be.true;
  });

  it('should have correct class when required prop is passed', () => {
    const wrapper = shallow(<Label required>some text</Label>);
    expect(wrapper.find('label').hasClass('required')).to.be.true;
  });
});
