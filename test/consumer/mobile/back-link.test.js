import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import BackLink from '../../../components/consumer/mobile/back-link';

describe('back-link', () => {
  it('should have correct class names', () => {
    const label = 'label';
    const href = 'href';
    const wrapper = shallow(<BackLink label={label} href={href} />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-back-link')).to.be.true;
    expect(wrapper.find('.pbg-mobile-label-link').prop('href')).to.equal(href);
    expect(wrapper.find('.pbg-mobile-label-link').text()).to.equal(label);
  });

  it('should have correct anchor when href is given and no react onClick', () => {
    const label = 'label';
    const href = 'href';
    const onClick = sinon.spy();
    const wrapper = shallow(<BackLink label={label} href={href} onClick={onClick} />);
    wrapper.find('.pbg-mobile-label-link').simulate('click');
    expect(wrapper.find('a').prop('href')).to.equal(href);
    expect(wrapper.find('a').text()).to.equal(label);
    expect(wrapper.find('a').hasClass('pbg-mobile-label-link')).to.be.true;
    expect(onClick.calledOnce).to.be.false;
  });

  it('should have correct div when react onClick when href is skipped', () => {
    const label = 'label';
    const onClick = sinon.spy();
    const wrapper = shallow(<BackLink label={label} onClick={onClick} />);
    wrapper.find('.pbg-mobile-label-link').simulate('click');
    expect(wrapper.find('.pbg-mobile-label-link').text()).to.equal(label);
    expect(wrapper.find('a').length).to.equal(0);
    expect(onClick.calledOnce).to.be.true;
  });
});
