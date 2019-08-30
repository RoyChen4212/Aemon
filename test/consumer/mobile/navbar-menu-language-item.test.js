import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import NavbarMenuLanguageItem from '../../../components/consumer/mobile/navbar-menu-language-item';

describe('navbar-menu-language-item', () => {
  it('should have correct class names', () => {
    const languages = [{ label: 'English', value: 'en' }, { label: 'Español', value: 'es' }];
    const wrapper = shallow(<NavbarMenuLanguageItem languages={languages} />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-navbar-menu-language-item')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const languages = [{ label: 'English', value: 'en' }, { label: 'Español', value: 'es' }];

    const wrapper = shallow(<NavbarMenuLanguageItem languages={languages} className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should have correct label and options', () => {
    const languages = [{ label: 'English', value: 'en' }, { label: 'Español', value: 'es' }];
    const label = 'label';
    const onChange = sinon.spy();
    const wrapper = shallow(
      <NavbarMenuLanguageItem languages={languages} label={label} onChange={onChange} value={null} />
    );
    expect(wrapper.find('.pbg-mobile-label-normal').text()).to.equal(label);
    expect(wrapper.find('option').length).to.equal(2);
    expect(
      wrapper
        .find('option')
        .at(0)
        .prop('value')
    ).to.equal(languages[0].value);
    expect(
      wrapper
        .find('option')
        .at(0)
        .prop('children')
    ).to.equal(languages[0].label);
    expect(
      wrapper
        .find('option')
        .at(1)
        .prop('value')
    ).to.equal(languages[1].value);
    expect(
      wrapper
        .find('option')
        .at(1)
        .prop('children')
    ).to.equal(languages[1].label);
  });

  it('should fire onChange on option select', () => {
    const languages = [{ label: 'English', value: 'en' }, { label: 'Español', value: 'es' }];
    const label = 'label';
    const onChange = sinon.spy();
    const wrapper = shallow(
      <NavbarMenuLanguageItem languages={languages} label={label} onChange={onChange} value={null} />
    );

    const select = wrapper.find('select');

    const e = { target: { value: 'es' } };
    select.simulate('change', e);

    expect(onChange.calledOnce).to.be.true;
    expect(onChange.calledWith(e)).to.be.true;
  });
});
