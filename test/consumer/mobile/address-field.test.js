import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import {
  AddressField,
  HistoricalPicker,
  NewAddressField,
  addressFields,
} from '../../../components/consumer/mobile/form-fields';
import { SmallButton } from '../../../components/consumer/mobile/button';

describe('Address Field', () => {
  const addressOptions = [
    {label: '472 Evergreen Terrace', value: 'first'},
    {label: '880 Harrison St, Suite 303C', value: 'second'},
    {label: 'Add new address', value: 'new'},
  ];

  const countries = [
    { label: 'United States', value: 'us' },
    { label: 'Mexico', value: 'mx' },
    { label: 'Denmark', value: 'dk'},
  ];

  it('should have correct class', () => {
    const wrapper = shallow(<AddressField />);
    expect(wrapper.hasClass('pbg-address-field')).to.be.true;
  });

  it('should not show picker when no options are passed', () => {
    const wrapper = shallow(<AddressField />);
    expect(wrapper.find(HistoricalPicker)).to.have.lengthOf(0);
  });

  it('should show HistoricalPicker when options are passed', () => {
    const wrapper = shallow(<AddressField addressOptions={addressOptions} />);
    expect(wrapper.find(HistoricalPicker)).to.have.lengthOf(1);
  });

  it('should pass address options to HistoricalPicker', () => {
    const wrapper = mount(<AddressField addressOptions={addressOptions} />);
    expect(wrapper.find(HistoricalPicker).prop('options')).to.eql(addressOptions)
  });

  it('should render NewAddressField when add new option is selected', () => {
    const value = {
      selected: 'new',
    };
    const wrapper = mount(<AddressField value={value} addressOptions={addressOptions} />);
    expect(wrapper.find(NewAddressField)).to.have.lengthOf(1);
  });

  it('should render NewAddressField when no options are passed', () => {
    const wrapper = mount(<AddressField  />);
    expect(wrapper.find(NewAddressField)).to.have.lengthOf(1);
  });

  it('should not render NewAddressField when an address is selected', () => {
    const value = {
      selected: addressOptions[0].value,
    };
    const wrapper = mount(<AddressField value={value} addressOptions={addressOptions}/>);
    expect(wrapper.find(NewAddressField)).to.have.lengthOf(0);
  });

  it('should return correct value when address is selected', function(done) {
    const event = { target: { value: addressOptions[1] } };
    const expected = { selected: addressOptions[1] };
    let runs = 0;
    const onChange = (ev) => {
      if (runs === 1) {
        expect(ev.target.value).to.eql(expected);
        done();
      }
      runs++;
    };
    const wrapper = mount(<AddressField addressOptions={addressOptions} onChange={onChange} />);
    wrapper.find('select').simulate('change', event);
  });

  it('should pass its value to new address field', () => {
    const value = { streetAddress: '742 Evergreen Terrace' };
    const wrapper = mount(<AddressField value={value} />);
    expect(wrapper.find(NewAddressField).prop('value')).to.eql(value);
  });

  it('should pass its value to historical picker', () => {
    const value = { selected: 'new' };
    const wrapper = mount(<AddressField value={value} addressOptions={addressOptions} />);
    expect(wrapper.find(HistoricalPicker).prop('value')).to.eql(value.selected);
  });

  it('should return correct value when address is typed in', function(done) {
    const expected = {
      selected: 'new',
      [addressFields.STREET_ADDRESS]: '472 Evergreen Terrace',
    };
    const onChange = (ev) => {
      expect(ev.target.value).to.eql(expected);
      done();
    };
    const wrapper = mount(<AddressField value={{ selected: 'new' }} onChange={onChange} />);
    wrapper.find({type: 'text', name: addressFields.STREET_ADDRESS})
      .simulate('change', { target: { value: expected[addressFields.STREET_ADDRESS]}});
  });

  it('should render add new button when address is selected', () => {
    const value = { selected: addressOptions[0].value };
    const wrapper = mount(<AddressField value={value} addressOptions={addressOptions} />);
    expect(wrapper.find(SmallButton)).to.have.lengthOf(1);
  });

  it('should add correct lable to add new button', () => {
    const value = { selected: addressOptions[0].value };
    const label = 'Some label';
    const wrapper = mount(
      <AddressField value={value} addNewButtonLabel={label} addressOptions={addressOptions}/>
    );
    expect(wrapper.find(SmallButton).text()).to.equal(label);
  });

  it('should return correct value when clicking add new button', function(done) {
    const value = { selected: addressOptions[0].value };
    const expected = { selected: 'new' };
    let runs = 0;
    const onChange = (ev) => {
      if (runs === 1) {
        expect(ev.target.value).to.eql(expected);
        done();
      }
      runs++;
    };
    const wrapper = mount(
      <AddressField value={value} onChange={onChange} addressOptions={addressOptions}/>
    );
    wrapper.find('button').simulate('click');
  });

  it('should pass countryOptions to new address', () => {
    const value = { selected: 'new' };
    const wrapper = mount(<AddressField value={value} countryOptions={countries} onChange={() => {}}/>);
    expect(wrapper.find(NewAddressField).prop('countryOptions')).to.eql(countries);
  });

  it('should pass error object to new address when present', () => {
    const value = { selected: 'new', [addressFields.STREET_ADDRESS]: '472 Evergreen Terrace' };
    const error = { [addressFields.CITY]: 'is required', [addressFields.STATE]: 'is required' };
    const wrapper = mount(<AddressField error={error} value={value} />);
    expect(wrapper.find(NewAddressField).prop('error')).to.eql(error);
  });

  it('should pass labels to add new address', () => {
    const value = { selected: 'new', [addressFields.STREET_ADDRESS]: '472 Evergreen Terrace' };
    const labels = {[addressFields.STREET_ADDRESS]: 'Street address'}
    const wrapper =  mount(<AddressField value={value} newAddressLabels={labels} />);
    expect(wrapper.find(NewAddressField).prop('labels')).to.eql(labels);
  });
});
