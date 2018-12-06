import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { TextField } from '../../components/varys-mobile/form-fields';
import Label, { types as labelTypes } from '../../components/varys-mobile/label';
import Hint, { types as hintTypes } from '../../components/varys-mobile/hint';

describe('TextField', () => {
  it('should have class pbg-form-field', () => {
    const wrapper = shallow(<TextField />);
    expect(wrapper.hasClass('pbg-form-field')).to.be.true;
  });

  it('should have class pbg-text-field', () => {
    const wrapper = shallow(<TextField />);
    expect(wrapper.hasClass('pbg-text-field')).to.be.true;
  });

  it('should contain one input type text element', () => {
    const wrapper = shallow(<TextField />);
    expect(wrapper.find('input')).to.have.lengthOf(1);
    expect(wrapper.find('input').prop('type')).to.be.equal('text');
  });

  it('should pass name prop to input element', () => {
    const expected = 'text-field-name';
    const wrapper = shallow(<TextField name={expected} />);
    expect(wrapper.find('input').html()).to.include(`name="${expected}"`);
  });

  it('should pass value prop to input element', () => {
    const expected = 'text field value';
    const wrapper = shallow(<TextField value={expected} />);
    expect(wrapper.find('input').prop('value')).to.equal(expected);
  });

  it('should pass onChange prop to input element', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<TextField onChange={onChange} />);
    wrapper.find('input').simulate('change');
    expect(onChange.calledOnce).to.be.true;
  });

  it('should pass label prop as placeholder to input element', () => {
    const expected = 'a placeholder';
    const wrapper = shallow(<TextField label={expected} />);
    expect(wrapper.find('input').prop('placeholder')).to.equal(expected);
  });

  it('should include label element with passed label along with input', () => {
    const expected = 'A label';
    const wrapper = shallow(<TextField label={expected} />);
    expect(wrapper.find(Label).prop('children')).to.equal(expected);
  });

  it('should add pbg-input-focused class when clicked on input', () => {
    const wrapper = shallow(<TextField />);
    wrapper.find('input').simulate('focus');
    expect(wrapper.hasClass('pbg-input-focused')).to.be.true;
  });

  it('should show a hint when given', () => {
    const expected = 'a hint';
    const wrapper = shallow(<TextField hint={expected} />);
    expect(wrapper.contains(<Hint>{expected}</Hint>)).to.be.true;
  });

  describe('With error', () => {
    it('should show an error hint when error is given', () => {
      const expected = 'a horrible error';
      const wrapper = shallow(<TextField error={expected} />);
      expect(wrapper.contains(<Hint type={hintTypes.ERROR}>{expected}</Hint>)).to.be.true;
    });

    it('should have correct class when error is given', () => {
      const wrapper = shallow(<TextField error="an error"/>);
      expect(wrapper.hasClass('pbg-form-field-error')).to.be.true;
    });

    it('should show an error over a hint when error is given', () => {
      const expected = 'a horrible error';
      const hint = 'nope';
      const wrapper = shallow(<TextField error={expected} hint={hint} />);
      expect(wrapper.contains(<Hint type={hintTypes.ERROR}>{expected}</Hint>)).to.be.true;
      expect(wrapper.contains(<Hint>{hint}</Hint>)).to.be.false;
    });

    it('should show an error label when error is given', () => {
      const expected = 'A label';
      const wrapper = shallow(<TextField error='and error' label={expected}/>);
      expect(wrapper.contains(<Label type={labelTypes.ERROR}>{expected}</Label>)).to.be.true;
    });
  });
});
