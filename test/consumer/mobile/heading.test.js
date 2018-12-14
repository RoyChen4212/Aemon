import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import {
  H1, H2, H3
} from '../../../components/consumer/mobile/heading';

describe('Heading', () => {
  it('should render an H1 tag when using H1', () => {
    const wrapper = shallow(<H1 />);
    expect(wrapper.find('h1')).to.have.lengthOf(1);
  });

  it('should contain correct class when using H1', () => {
    const wrapper = shallow(<H1 />);
    expect(wrapper.find('h1').hasClass('pbg-heading')).to.be.true;
    expect(wrapper.find('h1').hasClass('pbg-h1')).to.be.true;
  });

  it('should render an H2 tag when using H2', () => {
    const wrapper = shallow(<H2 />);
    expect(wrapper.find('h2')).to.have.lengthOf(1);
  });

  it('should contain correct class when using H2', () => {
    const wrapper = shallow(<H2 />);
    expect(wrapper.find('h2').hasClass('pbg-heading')).to.be.true;
    expect(wrapper.find('h2').hasClass('pbg-h2')).to.be.true;
  });

  it('should render an H2 tag when using H3', () => {
    const wrapper = shallow(<H3 />);
    expect(wrapper.find('h3')).to.have.lengthOf(1);
  });

  it('should contain correct class when using H3', () => {
    const wrapper = shallow(<H3 />);
    expect(wrapper.find('h3').hasClass('pbg-heading')).to.be.true;
    expect(wrapper.find('h3').hasClass('pbg-h3')).to.be.true;
  });
});