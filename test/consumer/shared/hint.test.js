import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Hint, {
  hintClassNames,
  hintTypes,
} from '../../../components/consumer/shared/hint';

describe('Hint', () => {
  it('should render a span tag', () => {
    const wrapper = shallow(<Hint />);
    expect(wrapper.find('span')).to.have.lengthOf(1);
  });

  it('should render with text', () => {
    const expected = 'Some text';
    const wrapper = shallow(<Hint>{expected}</Hint>);
    expect(wrapper.find('span').text()).to.equal(expected);
  });

  it('should have base class when no type is given', () => {
    const wrapper = shallow(<Hint>some text</Hint>);
    expect(wrapper.find('span').hasClass(hintClassNames.base)).to.be.true;
  });

  it('should contain any extra css classes given', () => {
    const expected = 'extra-class';
    const wrapper = shallow(<Hint className={expected}>some text</Hint>);
    expect(wrapper.find('span').hasClass(hintClassNames.base)).to.be.true;
    expect(wrapper.find('span').hasClass(expected)).to.be.true;
  });

  it('should have correct class when error type', () => {
    const wrapper = shallow(<Hint type={hintTypes.ERROR}>some text</Hint>);
    expect(wrapper.find('span').hasClass(hintClassNames[hintTypes.ERROR])).to.be
      .true;
  });

  it('should have correct class when clickable type', () => {
    const wrapper = shallow(<Hint type={hintTypes.CLICKABLE}>some text</Hint>);
    expect(wrapper.find('span').hasClass(hintClassNames[hintTypes.CLICKABLE]))
      .to.be.true;
  });

  it('should call onClick event when given', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Hint onClick={onClick}>some text</Hint>);
    wrapper
      .find('span')
      .find('a')
      .simulate('click');
    expect(onClick.calledOnce).to.be.true;
  });

  it('should accept a multiline prop that turns it into p', () => {
    const wrapper = shallow(<Hint multiline />);
    expect(wrapper.html()).to.equal('<p class="pbg-hint"></p>');
  });
});
