import React from 'react';
import { shallow } from 'enzyme';

import Container from '../../../components/consumer/desktop/container';

describe('Container', () => {
  it('should render div', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.find('div')).to.have.lengthOf(1);
  });

  it('should have class pbg-consumer-desktop', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
  });

  it('should have class pbg-container', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.hasClass('pbg-container')).to.be.true;
  });

  it('should add pbg-container-solid className', () => {
    const wrapper = shallow(<Container solid />);
    expect(wrapper.hasClass('pbg-container-solid')).to.be.true;
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-container')).to.be.true;
  });

  it('should add pbg-container-stroked className', () => {
    const wrapper = shallow(<Container stroked />);
    expect(wrapper.hasClass('pbg-container-stroked')).to.be.true;
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-container')).to.be.true;
  });

  it('should add pbg-container-shadow-1 className', () => {
    const wrapper = shallow(<Container shadow1 />);
    expect(wrapper.hasClass('pbg-container-shadow-1')).to.be.true;
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-container')).to.be.true;
  });

  it('should add pbg-container-shadow-2 className', () => {
    const wrapper = shallow(<Container shadow2 />);
    expect(wrapper.hasClass('pbg-container-shadow-2')).to.be.true;
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-container')).to.be.true;
  });

  it('should stack class names', () => {
    const wrapper = shallow(<Container solid stroked shadow2 />);
    expect(wrapper.hasClass('pbg-container-solid')).to.be.true;
    expect(wrapper.hasClass('pbg-container-stroked')).to.be.true;
    expect(wrapper.hasClass('pbg-container-shadow-2')).to.be.true;
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-container')).to.be.true;
  });

  it('should override shadow1 if shadow2 is present', () => {
    const wrapper = shallow(<Container solid stroked shadow1 shadow2 />);
    expect(wrapper.hasClass('pbg-container-solid')).to.be.true;
    expect(wrapper.hasClass('pbg-container-stroked')).to.be.true;
    expect(wrapper.hasClass('pbg-container-shadow-1')).to.be.false;
    expect(wrapper.hasClass('pbg-container-shadow-2')).to.be.true;
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-container')).to.be.true;
  });
});
