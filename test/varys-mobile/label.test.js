import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Label, {
  classes,
  types,
} from '../../components/varys-mobile/label';

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
    expect(wrapper.find('label').hasClass(classes.base)).to.be.true;
  });

  it('should have correct class when strong type', () => {
    const wrapper = shallow(<Label type={types.STRONG}>some text</Label>);
    expect(wrapper.find('label').hasClass(classes[types.STRONG])).to.be.true;
  });

  it('should have correct class when secondary type', () => {
    const wrapper = shallow(<Label type={types.SECONDARY}>some text</Label>);
    expect(wrapper.find('label').hasClass(classes[types.SECONDARY])).to.be.true;
  });

  it('should have correct class when input type', () => {
    const wrapper = shallow(<Label type={types.INPUT}>some text</Label>);
    expect(wrapper.find('label').hasClass(classes[types.INPUT])).to.be.true;
  });

  it('should have correct class when clickable type', () => {
    const wrapper = shallow(<Label type={types.CLICKABLE}>some text</Label>);
    expect(wrapper.find('label').hasClass(classes[types.CLICKABLE])).to.be.true;
  });

  it('should call onClick when when clickable type', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <Label type={types.CLICKABLE} onClick={onClick}>some text</Label>
    );
    wrapper.find('label').find('a').simulate('click');
    expect(onClick.calledOnce).to.be.true;
  });

  it('should add href prop with correct value when provided to clickable type', () => {
    const url = '/some/url';
    const wrapper = shallow(
      <Label type={types.CLICKABLE} href={url}>some text</Label>
    );
    expect(wrapper.find('label').find('a').prop('href')).to.equal(url);
  });

  it('should have correct class when active type', () => {
    const wrapper = shallow(<Label type={types.ACTIVE}>some text</Label>);
    expect(wrapper.find('label').hasClass(classes[types.ACTIVE])).to.be.true;
  });

  it('should have correct class when active error', () => {
    const wrapper = shallow(<Label type={types.ERROR}>some text</Label>);
    expect(wrapper.find('label').hasClass(classes[types.ERROR])).to.be.true;
  });
});
