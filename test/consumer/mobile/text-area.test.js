import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import TextArea from '../../../components/consumer/mobile/text-area';
import Label, { labelTypes } from '../../../components/consumer/mobile/label';
import Hint, { hintTypes } from '../../../components/consumer/mobile/hint';
import { shouldBehaveLikeTextField } from './text-field.test';

describe('TextArea', () => {
  shouldBehaveLikeTextField(shallow(<TextArea />));

  it('should have correct class name', () => {
    const wrapper = shallow(<TextArea />);
    expect(wrapper.hasClass('pbg-text-area')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<TextArea className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should show a hint when given', () => {
    const expected = 'a hint';
    const wrapper = shallow(<TextArea hint={expected} />);
    expect(wrapper.contains(<Hint>{expected}</Hint>)).to.be.true;
  });

  it('should execute onBlur when clicked out of textarea', () => {
    const onBlur = sinon.spy();
    const wrapper = shallow(<TextArea onBlur={onBlur} />);
    wrapper.find('textarea').simulate('focus');
    wrapper.find('textarea').simulate('blur');
    expect(onBlur.calledOnce).to.be.true;
  });

  it('should execute onTextChange when contents change', () => {
    const wrapper = mount(<TextArea />);
    const instance = wrapper.instance();

    instance.el = {
      current: {
        scrollHeight: 5,
      },
    };

    wrapper.find('textarea').simulate('change');
    expect(instance.state.style.height).to.equal('2px');
  });

  describe('With error', () => {
    it('should show an error hint when error is given', () => {
      const expected = 'a horrible error';
      const wrapper = shallow(<TextArea error={expected} />);
      expect(wrapper.contains(<Hint type={hintTypes.ERROR}>{expected}</Hint>)).to.be.true;
    });

    it('should have correct class when error is given', () => {
      const wrapper = shallow(<TextArea error="an error" />);
      expect(wrapper.hasClass('pbg-form-field-error')).to.be.true;
    });

    it('should show an error over a hint when error is given', () => {
      const expected = 'a horrible error';
      const hint = 'nope';
      const wrapper = shallow(<TextArea error={expected} hint={hint} />);
      expect(wrapper.contains(<Hint type={hintTypes.ERROR}>{expected}</Hint>)).to.be.true;
      expect(wrapper.contains(<Hint>{hint}</Hint>)).to.be.false;
    });

    it('should show an error label when error is given', () => {
      const expected = 'A label';
      const wrapper = shallow(<TextArea error="and error" label={expected} />);
      expect(wrapper.contains(<Label type={labelTypes.ERROR}>{expected}</Label>)).to.be.true;
    });
  });
});
