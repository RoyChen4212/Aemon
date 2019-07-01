import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { shouldBehaveLikeFormField } from '../shared/form-field.test';
import { DatePicker } from '../../../components/consumer/mobile/form-fields';
import Label, { labelTypes } from '../../../components/consumer/mobile/label';
import Hint, { hintTypes } from '../../../components/consumer/mobile/hint';

describe('Date picker', () => {
  shouldBehaveLikeFormField(shallow(<DatePicker error="some error" />));

  it('should have class pbg-date-picker', () => {
    const wrapper = shallow(<DatePicker />);
    expect(wrapper.hasClass('pbg-date-picker')).to.be.true;
  });

  it('should render an input with type date', () => {
    const wrapper = shallow(<DatePicker />);
    expect(wrapper.find('input').html()).to.include('type="date"');
  });

  it('should call onChange event when date input changes', () => {
    const onChange = sinon.spy();
    const event = { target: { value: '1984-10-19' } };
    const wrapper = shallow(<DatePicker onChange={onChange} />);
    wrapper.find('input').simulate('change', event);
    expect(onChange.calledOnce).to.be.true;
  });

  it('should call onChange with correct value', done => {
    const expected = '1984-10-19';
    const onChange = ev => {
      expect(ev.target.value).to.equal(expected);
      done();
    };
    const event = { target: { value: expected } };
    const wrapper = shallow(<DatePicker onChange={onChange} />);
    wrapper.find('input').simulate('change', event);
  });

  it('should call onBlur event when date input loses focus', () => {
    const onBlur = sinon.spy();
    const wrapper = shallow(<DatePicker onBlur={onBlur} />);
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('blur');
    expect(onBlur.calledOnce).to.be.true;
  });

  it('should execute formater provided for feedback', () => {
    const formater = sinon.spy();
    shallow(<DatePicker formater={formater} />);
    expect(formater.calledOnce).to.be.true;
  });

  it('should execute default formater if none provided for feedback', () => {
    const wrapper = shallow(<DatePicker />);
    const expected = <Label type={labelTypes.SECONDARY}>mm/dd/yyyy</Label>;
    expect(wrapper.find('.pbg-date-picker-mask').contains(expected)).to.be.true;
  });

  it('should pass value to input', () => {
    const date = '2018-12-8';
    const wrapper = shallow(<DatePicker value={date} />);
    expect(wrapper.find('input').prop('value')).to.equal(date);
  });

  it('should execute default formater if none provided for feedback with value', () => {
    const date = '2018-12-8';
    const wrapper = shallow(<DatePicker value={date} />);
    const expected = <Label type={labelTypes.SECONDARY}>12/08/2018</Label>;
    expect(wrapper.find('.pbg-date-picker-mask').contains(expected)).to.be.true;
  });

  it('should provide correct feedback with small date numbers', () => {
    const date = '2018-1-1';
    const wrapper = shallow(<DatePicker value={date} />);
    const expected = <Label type={labelTypes.SECONDARY}>01/01/2018</Label>;
    expect(wrapper.find('.pbg-date-picker-mask').contains(expected)).to.be.true;
  });

  it('should provide correct feedback with date object value', () => {
    const date = new Date('January 1, 2018');
    const wrapper = shallow(<DatePicker value={date} />);
    const expected = <Label type={labelTypes.SECONDARY}>01/01/2018</Label>;
    expect(wrapper.find('.pbg-date-picker-mask').contains(expected)).to.be.true;
  });

  it('should provide correct feedback with date object value', () => {
    const date = new Date('November 12, 2018');
    const wrapper = shallow(<DatePicker value={date} />);
    const expected = <Label type={labelTypes.SECONDARY}>11/12/2018</Label>;
    expect(wrapper.find('.pbg-date-picker-mask').contains(expected)).to.be.true;
  });

  it('should add a label with given text', () => {
    const wrapper = shallow(<DatePicker label="A label" />);
    const expected = <Label>A label</Label>;
    expect(wrapper.find('.pbg-date-picker').contains(expected)).to.be.true;
  });

  describe('With error', () => {
    it('should show an error hint when error is given', () => {
      const expected = 'a horrible error';
      const wrapper = shallow(<DatePicker error={expected} />);
      expect(wrapper.contains(<Hint type={hintTypes.ERROR}>{expected}</Hint>)).to.be.true;
    });

    it('should have correct class when error is given', () => {
      const wrapper = shallow(<DatePicker error="an error" />);
      expect(wrapper.hasClass('pbg-form-field-error')).to.be.true;
    });

    it('should show an error over a hint when error is given', () => {
      const expected = 'a horrible error';
      const hint = 'nope';
      const wrapper = shallow(<DatePicker error={expected} hint={hint} />);
      expect(wrapper.contains(<Hint type={hintTypes.ERROR}>{expected}</Hint>)).to.be.true;
      expect(wrapper.contains(<Hint>{hint}</Hint>)).to.be.false;
    });

    it('should show an error label when error is given', () => {
      const expected = 'A label';
      const wrapper = shallow(<DatePicker error="and error" label={expected} />);
      expect(wrapper.contains(<Label type={labelTypes.ERROR}>{expected}</Label>)).to.be.true;
    });
  });
});
