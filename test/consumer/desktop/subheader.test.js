import React from 'react';
import { mount, shallow } from 'enzyme';

import Subheader from '../../../components/consumer/desktop/subheader';

describe('Subheader', () => {
  it('should render the text and anchor props ', () => {
    const text = 'This is a subheader';
    const anchor = 'this_is_an_anchor';
    const wrapper = shallow(<Subheader text={text} anchor={anchor} />);
    expect(wrapper.html()).to.include(text);
    expect(wrapper.html()).to.include(anchor);
  });

  it('should render correct classes for wrapper, text and line elements', () => {
    const wrapper = shallow(<Subheader text="" />);
    const text = wrapper.childAt(0);
    const divider = wrapper.childAt(1);

    expect(wrapper.hasClass('pbg-subheader-wrapper')).to.be.true;
    expect(text.hasClass('pbg-subheader-text')).to.be.true;
    expect(divider.hasClass('pbg-subheader-divider')).to.be.true;
  });
});
