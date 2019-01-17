import React from 'react';
import { mount, shallow } from 'enzyme';

import Subheader from '../../../components/consumer/desktop/subheader';

describe('Subheader', () => {
  it('should render text prop', () => {
    const text = 'This is a subheader';
    const wrapper = shallow(<Subheader text={text} />);
    expect(wrapper.html()).to.include(text);
  });

  it('should render correct classes for wrapper, text and line elements', () => {
    const wrapper = shallow(<Subheader text='' />);
    const text = wrapper.childAt(0);
    const divider = wrapper.childAt(1);

    expect(wrapper.hasClass('pbg-subheader-wrapper')).to.be.true;
    expect(text.hasClass('pbg-subheader-text')).to.be.true;
    expect(divider.hasClass('pbg-subheader-divider')).to.be.true;
  });
});
