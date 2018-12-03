import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Label, {
  BASE_CLASS,
} from '../../components/varys-mobile/label';

describe('Label', () => {
  it('should render a label tag', () => {
    const wrapper = shallow(<Label />);
    expect(wrapper.contains(<label />)).to.be.true
  });

  it('should render with text', () => {
    const expected = 'Some text';
    const wrapper = shallow(<Label>{expected}</Label>);
    expect(wrapper.find('label > span').text()).to.equal(expected);
  });

  it('should have correct class', () => {
    const expected = BASE_CLASS;
    const wrapper = shallow(<Label>some text</Label>);
    expect(wrapper.hasClass(BASE_CLASS)).to.be.true;
  });
});
