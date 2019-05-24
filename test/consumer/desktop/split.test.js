import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import { 
  SplitEven, SplitCustom, SplitFixed,
} from '../../../components/consumer/desktop/split';
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

    it('should display empty copy for splitType when locked with no options', () => {
      const wrapper = mount(
        <SplitEven value={{ splitType: 'even' }} min locked copy={copy} />
      );
      expect(wrapper.text()).to.include(copy.split);
      expect(wrapper.text()).to.include(copy.across);
      expect(wrapper.text()).to.include(copy.shares);
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
        expect(ev.target.value).to.eql({ splitType: 'even', minShares: 2});
        done();
      };
      const wrapper = shallow(
        <SplitEven value={{ splitType: 'even' }} min copy={copy} onChange={onChange} />
      );
      wrapper.find(NumberStepper).simulate('change', {target: { value: 2}});
    });

    it('should pass value to number stepper', () => {
      const wrapper = shallow(<SplitEven value={{minShares: 10}} min />);
      expect(wrapper.find(NumberStepper).props().value).to.equal(10);
    });

    it('should pass boundaries to number stepper', () => {
      const wrapper = shallow(<SplitEven boundaries={[0, 10]} min />);
      expect(wrapper.find(NumberStepper).props().min).to.equal(0);
      expect(wrapper.find(NumberStepper).props().max).to.equal(10);
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
        expect(ev.target.value).to.eql({ splitType: 'even', minShares: 2});
        done();
      };
      const wrapper = shallow(
        <SplitEven value={{ splitType: 'even' }} range copy={copy} onChange={onChange} />
      );
      wrapper.find(NumberStepper).at(0).simulate('change', {target: { value: 2}});
    });

    it('should report correct value when max number stepper value changes', function (done) {
      const onChange = (ev) => {
        expect(ev.target.value).to.eql({ splitType: 'even', maxShares: 2});
        done();
      };
      const wrapper = shallow(
        <SplitEven value={{ splitType: 'even' }} range copy={copy} onChange={onChange} />
      );
      wrapper.find(NumberStepper).at(1).simulate('change', {target: { value: 2}});
    });

    it('should pass value to correct number stepper', () => {
      const wrapper = shallow(<SplitEven value={{minShares: 10, maxShares: 20}} range />);
      expect(wrapper.find(NumberStepper).at(0).props().value).to.equal(10);
      expect(wrapper.find(NumberStepper).at(1).props().value).to.equal(20);
    });

    it('should pass boundaries to correct number stepper', () => {
      const wrapper = shallow(<SplitEven boundaries={[0, 10]} range copy={copy}/>);
      expect(wrapper.find(NumberStepper).at(0).props().min).to.equal(0);
      expect(wrapper.find(NumberStepper).at(1).props().max).to.equal(10);
    });

    it('should increment steppers when min stepper will have same value as max', function(done) {
      const onChange = (ev) => {
        expect(ev.target.value).to.eql({minShares: 3, maxShares: 4});
        done();
      }
      const wrapper = mount(
        <SplitEven boundaries={[0, 10]} range value={{minShares: 2, maxShares: 3}} onChange={onChange} />
      );
      wrapper.find(NumberStepper).at(0).find('.increment').simulate('click');
    });

    it('should decrement steppers when max stepper will have same value as min', function(done) {
      const onChange = (ev) => {
        expect(ev.target.value).to.eql({minShares: 3, maxShares: 4});
        done();
      }
      const wrapper = mount(
        <SplitEven boundaries={[0, 10]} range value={{minShares: 4, maxShares: 5}} onChange={onChange}/>
      );
      wrapper.find(NumberStepper).at(1).find('.decrement').simulate('click');
    });

    it('should disable minShares stepper increment button when upper boundary is met', () => {
      const wrapper = mount(
        <SplitEven boundaries={[0, 3]} range value={{minShares: 2, maxShares: 3}} />
      );
      expect(wrapper.find(NumberStepper).at(0).find('.increment').props().disabled).to.be.true;
    });

    it('should disable maxShares stepper decrement button when lower boundary is met', () => {
      const wrapper = mount(
        <SplitEven boundaries={[2, 3]} range value={{minShares: 2, maxShares: 3}} />
      );
      expect(wrapper.find(NumberStepper).at(1).find('.decrement').props().disabled).to.be.true;
    });
  });
});

describe('SplitCustom', () => {
  shouldBehaveLikeFormField(shallow(<SplitCustom />));
  const options = [
    { label: {term: 'even'}, value: 'even'},
    { label: {term: 'custom'}, value: 'custom'},
  ];
  const copy = {split: 'Split', for: 'for different amounts per contributor'};

  it('should render a simple picker', () => {
    const wrapper = shallow(<SplitCustom value={{ splitType: 'custom' }} min />);
    const picker = wrapper.find(Picker);
    expect(picker).to.have.lengthOf(1);
    expect(picker.props().simple).to.be.true;
  });

  it('should pass options to picker', () => {
    const wrapper = shallow(<SplitCustom value={{ splitType: 'custom' }} min options={options}/>);
    expect(wrapper.find(Picker).props().options).to.eql(options);
  });
});

describe('SplitFixed', () => {
  const options = [
    { label: {term: 'even'}, value: 'even'},
    { label: {term: 'custom'}, value: 'custom'},
  ];
  const copy = {split: 'Split', to: 'to', shares: 'shares for purchase'};
  describe('Min', () => {
    it('should render one number stepper', () => {
      const wrapper = shallow(<SplitFixed min />);
      expect(wrapper.find(NumberStepper)).to.have.lengthOf(1);
    });

    it('should render copy given', () => {
      const wrapper = shallow(<SplitFixed min copy={copy}/>);
      expect(wrapper.text()).to.include(copy.split);
      expect(wrapper.text()).to.include(copy.shares);
    });
  });

  describe('Range', () => {
    it('should render two number steppers', () => {
      const wrapper = shallow(<SplitFixed value={{ splitType: 'specified_per_person' }} range />);
      expect(wrapper.find(NumberStepper)).to.have.lengthOf(2);
    });

    it('should render copy given', () => {
      const wrapper = shallow(<SplitFixed range copy={copy}/>);
      expect(wrapper.text()).to.include(copy.split);
      expect(wrapper.text()).to.include(copy.to);
      expect(wrapper.text()).to.include(copy.shares);
    });
  })
});