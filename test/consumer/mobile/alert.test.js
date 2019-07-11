import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Alert, { alertTypes } from '../../../components/consumer/mobile/alert';

describe('Alert', () => {
  it('should render div', () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper.find('div')).to.have.lengthOf(3);
  });

  it('should have class pbg-consumer-mobile', () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
  });

  it('should have class pbg-alert', () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper.hasClass('pbg-alert')).to.be.true;
  });

  it('should add pbg-alert-error className', () => {
    const wrapper = shallow(<Alert type={alertTypes.ERROR} />);
    expect(wrapper.hasClass('pbg-alert-error')).to.be.true;
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-alert')).to.be.true;
  });

  it('should add pbg-alert-warning className', () => {
    const wrapper = shallow(<Alert type={alertTypes.WARNING} />);
    expect(wrapper.hasClass('pbg-alert-warning')).to.be.true;
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-alert')).to.be.true;
  });

  it('should add pbg-alert-success className as default', () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper.hasClass('pbg-alert-success')).to.be.true;
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-alert')).to.be.true;
  });

  it('should add title in label strong', () => {
    const wrapper = shallow(<Alert title="some title" />);
    expect(
      wrapper
        .find('.pbg-mobile-label-strong')
        .find('span')
        .text()
    ).to.equal('some title');
  });

  it('should add text in label normal', () => {
    const wrapper = mount(<Alert text="some text" />);
    expect(wrapper.find('.pbg-mobile-paragraph').text()).to.equal('some text');
  });

  it('should have divider', () => {
    const wrapper = mount(<Alert text="some text" />);
    expect(wrapper.find('.pbg-alert-divider')).to.have.lengthOf(1);
  });

  it('should render cta button', () => {
    const wrapper = shallow(<Alert ctaLabel="ctaLabel" />);

    const ctaButton = wrapper.find('.pbg-button-link');
    expect(ctaButton.hasClass('pbg-button')).to.be.true;
    expect(ctaButton.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(ctaButton.find('span').text()).to.equal('ctaLabel');
  });

  it('should trigger onCallToAction', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Alert onCallToAction={spy} />);

    wrapper.find('.pbg-button-link').simulate('click');

    expect(spy.calledOnce).to.be.true;
  });

  it('should render close button', () => {
    const wrapper = shallow(<Alert />);

    expect(wrapper.find('.pbg-alert-close-button')).to.have.lengthOf(1);
  });

  it('should trigger onCloseClick', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Alert onCloseClick={spy} />);

    wrapper.find('.pbg-alert-close-button').simulate('click');

    expect(spy.calledOnce).to.be.true;
  });
});
