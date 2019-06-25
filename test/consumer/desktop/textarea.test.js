import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import TextArea from '../../../components/consumer/desktop/text-area';
import Hint, { hintTypes } from '../../../components/consumer/desktop/hint';

describe('TextArea', () => {
  it('should have class pbg-form-field', () => {
    const wrapper = shallow(<TextArea />);
    expect(wrapper.hasClass('pbg-form-field')).to.be.true;
  });

  it('should have class pbg-consumer-desktop', () => {
    const wrapper = shallow(<TextArea />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
  });

  it('should add pbg-form-field-focused class when focused', function(done) {
    const wrapper = shallow(<TextArea />);
    wrapper.setProps({ focused: true }, () => {
      expect(wrapper.hasClass('pbg-form-field-focused')).to.be.true;
      done();
    });
  });

  it('should remove pbg-form-field-focused class when not focused', function(done) {
    const wrapper = shallow(<TextArea />);
    wrapper.setProps({ focused: true }, () => {
      wrapper.setProps({ focused: false }, () => {
        expect(wrapper.hasClass('pbg-form-field-focused')).to.be.false;
        done();
      });
    });
  });

  it('should have correct class name', () => {
    const wrapper = shallow(<TextArea />);
    expect(wrapper.hasClass('pbg-text-area')).to.be.true;
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

  it('should provide correct rows when empty', () => {
    const wrapper = shallow(<TextArea />);
    expect(wrapper.instance().rows).to.equal(3);
  });

  it('should provide correct rows when value is larger than 100', () => {
    const value =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare orci dolor, scelerisque posuere.';
    const wrapper = shallow(<TextArea value={value} />);
    expect(wrapper.instance().rows).to.equal(3);
  });

  it('should not show hint when simple is given', () => {
    const hint = 'nope';
    const wrapper = shallow(<TextArea hint={hint} simple />);
    expect(wrapper.contains(<Hint>{hint}</Hint>)).to.be.false;
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
  });
});
