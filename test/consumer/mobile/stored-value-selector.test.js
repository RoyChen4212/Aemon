import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import StoredValueSelector from '../../../components/consumer/mobile/stored-value-selector';
import Picker from '../../../components/consumer/mobile/picker';
import TextField from '../../../components/consumer/mobile/text-field';
import { SmallButton } from '../../../components/consumer/mobile/button';
import { shouldBehaveLikeFormField } from '../shared/form-field.test';

describe('Stored Value Selector', () => {
  const options = [
    { label: 'First option', value: 'first' },
    { label: 'Second option', value: 'second' },
    { label: 'Super long option text here', value: 'third' },
    { label: 'Add new item', value: 'new' },
  ];

  shouldBehaveLikeFormField(shallow(<StoredValueSelector addNewValue="new" addNewText="add" />));

  it('should have correct class', () => {
    const wrapper = shallow(<StoredValueSelector addNewValue="new" addNewText="add" />);
    expect(wrapper.hasClass('pbg-stored-value-selector')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<StoredValueSelector className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should not render label when no label prop', () => {
    const wrapper = shallow(<StoredValueSelector addNewValue="new" addNewText="add" />);
    expect(wrapper.find('.pbg-mobile-label-normal')).to.have.lengthOf(0);
  });

  it('should render label', () => {
    const wrapper = shallow(<StoredValueSelector addNewValue="new" addNewText="add" label="label" />);
    expect(wrapper.find('.pbg-mobile-label-normal').text()).to.eql('label');
  });

  it('should not show picker when no options are passed', () => {
    const wrapper = shallow(<StoredValueSelector addNewValue="new" addNewText="add" />);
    expect(wrapper.find(Picker)).to.have.lengthOf(0);
  });

  it('should render a picker when options are pased', () => {
    const wrapper = shallow(<StoredValueSelector addNewValue="new" addNewText="add" options={options} />);
    expect(wrapper.find(Picker)).to.have.lengthOf(1);
  });

  it('should pass options to Picker', () => {
    const wrapper = mount(<StoredValueSelector addNewValue="new" addNewText="add" options={options} />);
    expect(wrapper.find(Picker).prop('options')).to.eql(options);
  });

  it('should pass selected value to Picker', () => {
    const wrapper = mount(<StoredValueSelector addNewValue="new" addNewText="add" value="first" options={options} />);
    expect(wrapper.find(Picker).prop('value')).to.equal('first');
  });

  it('should show add new button when other value than new is selected', () => {
    const wrapper = mount(<StoredValueSelector addNewValue="new" addNewText="add" options={options} value="first" />);
    expect(wrapper.find(SmallButton)).to.have.lengthOf(1);
  });

  it('should not show add new button when no options are passed', () => {
    const wrapper = mount(<StoredValueSelector addNewValue="new" addNewText="add" />);
    expect(wrapper.find(SmallButton)).to.have.lengthOf(0);
  });

  it('should not show add new button when new value is selected', () => {
    const wrapper = mount(<StoredValueSelector addNewValue="new" addNewText="add" value="new" />);
    expect(wrapper.find(SmallButton)).to.have.lengthOf(0);
  });

  it('should pass addNewButtonLabel to small button', () => {
    const wrapper = mount(<StoredValueSelector addNewValue="new" addNewText="add" options={options} value="first" />);
    expect(wrapper.find(SmallButton).text()).to.equal('add');
  });

  it('should select default option when no value is given', () => {
    const wrapper = shallow(<StoredValueSelector addNewValue="new" addNewText="add" options={options} />);
    expect(wrapper.instance().value).to.eql('new');
  });

  it('should return correct value when clicking the option', done => {
    const event = { target: { value: 'first' } };
    const onChange = ev => {
      expect(ev.target.value).to.eql('first');
      done();
    };
    const wrapper = mount(
      <StoredValueSelector addNewValue="new" addNewText="add" onChange={onChange} options={options} />
    );
    wrapper
      .find(Picker)
      .find('select')
      .simulate('change', event);
  });

  it('should return correct value when clicking add new button', done => {
    const onChange = ev => {
      expect(ev.target.value).to.eql('new');
      done();
    };
    const wrapper = mount(
      <StoredValueSelector addNewValue="new" addNewText="add" value="first" onChange={onChange} options={options} />
    );
    wrapper.find('button').simulate('click');
  });

  it('should show TextField when new value is selected', () => {
    const wrapper = mount(
      <StoredValueSelector addNewValue="new" addNewText="add" options={options}>
        <TextField />
      </StoredValueSelector>
    );
    expect(wrapper.find(TextField)).to.have.lengthOf(1);
  });

  it('should show TextField when no options are passed', () => {
    const wrapper = mount(
      <StoredValueSelector addNewValue="new" addNewText="add">
        <TextField />
      </StoredValueSelector>
    );
    expect(wrapper.find(TextField)).to.have.lengthOf(1);
  });
});
