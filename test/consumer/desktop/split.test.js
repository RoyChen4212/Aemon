import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import { SplitEven } from '../../../components/consumer/desktop/split';
import Picker from '../../../components/consumer/desktop/picker';
import Label from '../../../components/consumer/desktop/label';
import NumberStepper  from '../../../components/consumer/desktop/simple-number-stepper';
import { shouldBehaveLikeFormField } from '../shared/form-field.test';


describe('SplitEven', () => {
  shouldBehaveLikeFormField(shallow(<SplitEven />));
  const options = [
    { label: {term: 'even'}, value: 'even'},
    { label: {term: 'custom'}, value: 'custom'},
  ];
  const copy = {split: 'Split', across: 'across', to: 'to', shares: 'shares'};

  describe('Even/Min', () => {
    it('should determine correctly it is a min split even with min', () => {
      const wrapper = shallow(<SplitEven value={{ splitType: 'even' }} min />);
      expect(wrapper.instance().isMin).to.be.true;
    });

    it('should determine correctly it is a min split even with just no range', () => {
      const wrapper = shallow(<SplitEven value={{ splitType: 'even' }} />);
      expect(wrapper.instance().isMin).to.be.true;
    });

    it('should determine correctly it is a range split even with range', () => {
      const wrapper = shallow(<SplitEven value={{ splitType: 'even' }} range />);
      expect(wrapper.instance().isMin).to.be.false;
    });

    it('should render a simple picker', () => {
      const wrapper = shallow(<SplitEven value={{ splitType: 'even' }} min />);
      const picker = wrapper.find(Picker);
      expect(picker).to.have.lengthOf(1);
      expect(picker.props().simple).to.be.true;
    });

    it('should pass options to picker', () => {
      const wrapper = shallow(<SplitEven value={{ splitType: 'even' }} min options={options}/>);
      expect(wrapper.find(Picker).props().options).to.eql(options);
    });

    it('should render a number stepper', () => {
      const wrapper = shallow(<SplitEven value={{ splitType: 'even' }} min />);
      expect(wrapper.find(NumberStepper)).to.have.lengthOf(1);
    });

    it('should render copy given', () => {
      const wrapper = shallow(<SplitEven value={{ splitType: 'even' }} min copy={copy}/>);
      expect(wrapper.text()).to.include(copy.split);
      expect(wrapper.text()).to.include(copy.across);
      expect(wrapper.text()).to.include(copy.shares);
    });

    it('should pass value.splitType to picker', () => {
      const wrapper = shallow(<SplitEven value={{ splitType: 'even' }} min copy={copy} />);
      expect(wrapper.find(Picker).props().value).to.equal('even');
    });

    it('should display copy for splitType when locked', () => {
      const wrapper = mount(
        <SplitEven value={{ splitType: 'even' }} min locked copy={copy} options={options} />
      );
      expect(wrapper.find('.pbg-split-copy strong').text()).to.include('even');
    });

    it('should report correct value when split type picker value changes', function (done) {
      const onChange = (ev) => {
        expect(ev.target.value).to.eql({ splitType: 'custom'});
        done();
      };
      const wrapper = shallow(
        <SplitEven value={{ splitType: 'even' }} min copy={copy} onChange={onChange} />
      );
      wrapper.find(Picker).simulate('change', {target: { value: 'custom'}});
    });

    it('should report correct value when number stepper value changes', function (done) {
      const onChange = (ev) => {
        expect(ev.target.value).to.eql({ splitType: 'even', min: 2});
        done();
      };
      const wrapper = shallow(
        <SplitEven value={{ splitType: 'even' }} min copy={copy} onChange={onChange} />
      );
      wrapper.find(NumberStepper).simulate('change', {target: { value: 2}});
    });
  });

  describe('Even/Range', () => {
    it('should render a simple picker', () => {
      const wrapper = shallow(<SplitEven value={{ splitType: 'even' }} range />);
      const picker = wrapper.find(Picker);
      expect(picker).to.have.lengthOf(1);
      expect(picker.props().simple).to.be.true;
    });

    it('should render two number steppers', () => {
      const wrapper = shallow(<SplitEven value={{ splitType: 'even' }} range />);
      expect(wrapper.find(NumberStepper)).to.have.lengthOf(2);
    });

    it('should render copy given', () => {
      const wrapper = shallow(<SplitEven value={{ splitType: 'even' }} range copy={copy}/>);
      expect(wrapper.text()).to.include(copy.split);
      expect(wrapper.text()).to.include(copy.across);
      expect(wrapper.text()).to.include(copy.to);
      expect(wrapper.text()).to.include(copy.shares);
    });

    it('should report correct value when min number stepper value changes', function (done) {
      const onChange = (ev) => {
        expect(ev.target.value).to.eql({ splitType: 'even', min: 2});
        done();
      };
      const wrapper = shallow(
        <SplitEven value={{ splitType: 'even' }} range copy={copy} onChange={onChange} />
      );
      wrapper.find(NumberStepper).at(0).simulate('change', {target: { value: 2}});
    });

    it('should report correct value when max number stepper value changes', function (done) {
      const onChange = (ev) => {
        expect(ev.target.value).to.eql({ splitType: 'even', max: 2});
        done();
      };
      const wrapper = shallow(
        <SplitEven value={{ splitType: 'even' }} range copy={copy} onChange={onChange} />
      );
      wrapper.find(NumberStepper).at(1).simulate('change', {target: { value: 2}});
    });
  });
});