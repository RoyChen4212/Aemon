import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import StoredValueSelector from '../../../components/consumer/desktop/stored-value-selector';
import Picker from '../../../components/consumer/desktop/picker';
import TextField from '../../../components/consumer/desktop/text-field';
import { shouldBehaveLikeFormField } from '../shared/form-field.test';

describe('Stored Value Selector', () => {
  const options = [
    { label: { term: 'First option' }, value: 'first' },
    { label: { term: 'Second option' }, value: 'second' },
    { label: { term: 'Extremely long text here, this should expand menu' }, value: 'third' },
    { label: { term: 'Add new item' }, value: 'new' },
  ];

  shouldBehaveLikeFormField(shallow(<StoredValueSelector addNewValue="new" addNewText="add" orText="or" />));

  it('should have correct class', () => {
    const wrapper = shallow(<StoredValueSelector addNewValue="new" addNewText="add" orText="or" />);
    expect(wrapper.hasClass('pbg-stored-value-selector')).to.be.true;
  });

  it('should not render label when no label prop', () => {
    const wrapper = shallow(<StoredValueSelector addNewValue="new" addNewText="add" orText="or" />);
    expect(wrapper.find('.pbg-desktop-label-normal')).to.have.lengthOf(0);
  });

  it('should render label', () => {
    const wrapper = shallow(<StoredValueSelector addNewValue="new" addNewText="add" orText="or" label="label" />);
    expect(wrapper.find('.pbg-desktop-label-normal').text()).to.eql('label');
  });

  it('should not show picker when no options are passed', () => {
    const wrapper = shallow(<StoredValueSelector addNewValue="new" addNewText="add" orText="or" />);
    expect(wrapper.find(Picker)).to.have.lengthOf(0);
  });

  it('should render a picker when options are pased', () => {
    const wrapper = shallow(<StoredValueSelector addNewValue="new" addNewText="add" orText="or" options={options} />);
    expect(wrapper.find(Picker)).to.have.lengthOf(1);
  });

  it('should pass options to Picker', () => {
    const wrapper = mount(<StoredValueSelector addNewValue="new" addNewText="add" orText="or" options={options} />);
    expect(wrapper.find(Picker).prop('options')).to.eql(options);
  });

  it('should pass selected value to Picker', () => {
    const wrapper = mount(
      <StoredValueSelector addNewValue="new" addNewText="add" orText="or" value="first" options={options} />
    );
    expect(wrapper.find(Picker).prop('value')).to.equal('first');
  });

  it('should show add new button when other value than new is selected', () => {
    const wrapper = mount(
      <StoredValueSelector addNewValue="new" addNewText="add" orText="or" options={options} value="first" />
    );
    expect(wrapper.find('.pbg-stored-value-selector-add-container')).to.have.lengthOf(1);
  });

  it('should not include children of add new button container when no options are passed', () => {
    const wrapper = mount(<StoredValueSelector addNewValue="new" addNewText="add" orText="or" />);
    expect(wrapper.find('.pbg-stored-value-selector-add-container').children()).to.have.lengthOf(0);
  });

  it('should not include children of add new button when new value is selected', () => {
    const wrapper = mount(<StoredValueSelector addNewValue="new" addNewText="add" orText="or" value="new" />);
    expect(wrapper.find('.pbg-stored-value-selector-add-container').children()).to.have.lengthOf(0);
  });

  it('should pass orText to orLabel', () => {
    const wrapper = mount(
      <StoredValueSelector addNewValue="new" addNewText="add" orText="or" options={options} value="first" />
    );
    expect(
      wrapper
        .find('.pbg-stored-value-selector-add-container')
        .find('.pbg-desktop-paragraph')
        .text()
    ).to.equal('or');
  });

  it('should pass addNewText to add button', () => {
    const wrapper = mount(
      <StoredValueSelector addNewValue="new" addNewText="add" orText="or" options={options} value="first" />
    );
    expect(
      wrapper
        .find('.pbg-stored-value-selector-add-container')
        .find('.pbg-desktop-label-link')
        .text()
    ).to.equal('add');
  });

  it('should select default option when no value is given', () => {
    const wrapper = shallow(<StoredValueSelector addNewValue="new" addNewText="add" orText="or" options={options} />);
    expect(wrapper.instance().value).to.eql('new');
  });

  it('should return correct value when click the option', done => {
    const onChange = ev => {
      expect(ev.target.value).to.eql('first');
      done();
    };
    const wrapper = mount(
      <StoredValueSelector addNewValue="new" addNewText="add" onChange={onChange} orText="or" options={options} />
    );
    wrapper
      .find('.pbg-picker-menu')
      .find('.picker-menu-item')
      .at(0)
      .simulate('click');
  });

  it('should return correct value when clicking add new button', done => {
    const onChange = ev => {
      expect(ev.target.value).to.eql('new');
      done();
    };
    const wrapper = mount(
      <StoredValueSelector
        addNewValue="new"
        addNewText="add"
        value="first"
        orText="or"
        onChange={onChange}
        options={options}
      />
    );
    wrapper
      .find('.pbg-stored-value-selector-add-container')
      .find('.pbg-desktop-label-link')
      .simulate('click');
  });

  it('should show TextField when new value is selected', () => {
    const wrapper = mount(
      <StoredValueSelector addNewValue="new" addNewText="add" orText="or" options={options}>
        <TextField />
      </StoredValueSelector>
    );
    expect(wrapper.find('.pbg-stored-value-selector-children')).to.have.lengthOf(1);
    expect(wrapper.find(TextField)).to.have.lengthOf(1);
  });

  it('should show TextField when no options are passed', () => {
    const wrapper = mount(
      <StoredValueSelector addNewValue="new" orText="or" addNewText="add">
        <TextField />
      </StoredValueSelector>
    );
    expect(wrapper.find(TextField)).to.have.lengthOf(1);
  });
});
