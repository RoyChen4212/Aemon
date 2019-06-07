import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import {
  PhoneField,
  HistoricalPicker,
  TextField,
} from '../../../components/consumer/mobile/form-fields';
import { SmallButton } from '../../../components/consumer/mobile/button';

describe('Phone Field', () => {
  const phoneOptions = [
    { label: '91-2222-1332', value: 'first' },
    { label: '91-3333-1442, Suite 303C', value: 'second' },
    { label: 'Add new phone', value: 'new' },
  ];

  it('should have correct class', () => {
    const wrapper = shallow(<PhoneField />);
    expect(wrapper.hasClass('pbg-phone-field')).to.be.true;
  });

  it('should not show picker when no options are passed', () => {
    const wrapper = shallow(<PhoneField />);
    expect(wrapper.find(HistoricalPicker)).to.have.lengthOf(0);
  });

  it('should render a HistoricalPicker when options are pased', () => {
    const wrapper = shallow(<PhoneField phoneOptions={phoneOptions} />);
    expect(wrapper.find(HistoricalPicker)).to.have.lengthOf(1);
  });

  it('should pass phone options to HistoricalPicker', () => {
    const wrapper = mount(<PhoneField phoneOptions={phoneOptions} />);
    expect(wrapper.find(HistoricalPicker).prop('options')).to.eql(phoneOptions);
  });

  it('should pass selected value to HistoricalPicker', () => {
    const value = { selected: phoneOptions[0] };
    const wrapper = mount(
      <PhoneField phoneOptions={phoneOptions} value={value} />
    );
    expect(wrapper.find(HistoricalPicker).prop('value')).to.equal(
      value.selected
    );
  });

  it('should show add new button when value other than new is selected', () => {
    const value = { selected: phoneOptions[0] };
    const wrapper = mount(
      <PhoneField phoneOptions={phoneOptions} value={value} />
    );
    expect(wrapper.find(SmallButton)).to.have.lengthOf(1);
  });

  it('should not show add new button when no options are passed', () => {
    const wrapper = mount(<PhoneField />);
    expect(wrapper.find(SmallButton)).to.have.lengthOf(0);
  });

  it('should not show add new button when new value is selected', () => {
    const value = { selected: 'new' };
    const wrapper = mount(
      <PhoneField phoneOptions={phoneOptions} value={value} />
    );
    expect(wrapper.find(SmallButton)).to.have.lengthOf(0);
  });

  it('should pass addNewButtonLabel to small button', () => {
    const value = { selected: phoneOptions[0] };
    const expected = 'add new label';
    const wrapper = mount(
      <PhoneField
        phoneOptions={phoneOptions}
        value={value}
        addNewButtonLabel={expected}
      />
    );
    expect(wrapper.find(SmallButton).text()).to.equal(expected);
  });

  it('return empty object value when no value is given', () => {
    const wrapper = shallow(<PhoneField />);
    expect(wrapper.instance().currentValue).to.eql({});
  });

  it('should return correct value when clicking add new button', function(done) {
    const value = { selected: phoneOptions[0].value };
    const expected = { selected: 'new' };
    let runs = 0;
    const onChange = ev => {
      if (runs === 1) {
        expect(ev.target.value).to.eql(expected);
        done();
      }
      runs++;
    };
    const wrapper = mount(
      <PhoneField
        value={value}
        onChange={onChange}
        phoneOptions={phoneOptions}
      />
    );
    wrapper.find('button').simulate('click');
  });

  it('should show TextField when new value is selected', () => {
    const value = { selected: 'new' };
    const wrapper = mount(<PhoneField value={value} />);
    expect(wrapper.find(TextField)).to.have.lengthOf(1);
  });

  it('should show TextField when no options are passed', () => {
    const wrapper = mount(<PhoneField />);
    expect(wrapper.find(TextField)).to.have.lengthOf(1);
  });

  it('should show TextField with type tel', () => {
    const wrapper = mount(<PhoneField />);
    expect(wrapper.find(TextField).prop('type')).to.equal('tel');
  });

  it('should report new phone value on TextField change', function(done) {
    const value = { selected: 'new' };
    const phone = '99-1234-1234';
    const event = { target: { value: phone } };
    const onChange = ev => {
      expect(ev.target.value).to.eql({ ...value, phone });
      done();
    };
    const wrapper = mount(<PhoneField value={value} onChange={onChange} />);
    wrapper.find('input').simulate('change', event);
  });

  it('should pass phone value to text field', () => {
    const value = { selected: 'new', phone: '33133323' };
    const wrapper = shallow(<PhoneField value={value} />);
    expect(wrapper.find(TextField).prop('value')).to.equal(value.phone);
  });

  it('should pass label to TextField change', () => {
    const expected = 'A label';
    const value = { selected: 'new' };
    const wrapper = mount(
      <PhoneField addPhoneLabel={expected} value={value} />
    );
    expect(wrapper.find(TextField).prop('label')).to.equal(expected);
  });

  it('should pass error to phone field only if present and touched', () => {
    const expected = 'an error';
    const value = { selected: 'new' };
    const wrapper = mount(
      <PhoneField
        error={{ phone: expected }}
        value={value}
        onChange={() => {}}
      />
    );
    expect(wrapper.instance().phoneError).to.be.undefined;
    wrapper.setState({ touched: true }, () => {
      expect(wrapper.instance().phoneError).to.equal(expected);
    });
  });

  it('should pass error to phone field only if present and force display is passed', () => {
    const expected = 'an error';
    const value = { selected: 'new' };
    const wrapper = mount(
      <PhoneField error={{ phone: expected }} value={value} forceErrorDisplay />
    );
    expect(wrapper.instance().phoneError).to.equal(expected);
  });

  it('should set state touched when blur event occurs on text field', () => {
    const value = { selected: 'new' };
    const wrapper = shallow(<PhoneField value={value} />);
    expect(wrapper.state().touched).to.be.false;
    wrapper.find(TextField).simulate('blur');
    expect(wrapper.state().touched).to.be.true;
  });

  it('should set execute onBlur when blur event occurs on text field', () => {
    const value = { selected: 'new' };
    const onBlur = sinon.spy();
    const wrapper = shallow(<PhoneField value={value} onBlur={onBlur} />);
    wrapper.find(TextField).simulate('blur');
    expect(onBlur.calledOnce).to.be.true;
  });
});
