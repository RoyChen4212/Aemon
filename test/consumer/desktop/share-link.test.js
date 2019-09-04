import React from 'react';
import { shallow } from 'enzyme';
import ShareLink from '../../../components/consumer/desktop/share-link';

describe('share-link', () => {
  it('should have correct class names', () => {
    const label = 'label';
    const href = 'href';

    const wrapper = shallow(<ShareLink label={label} href={href} />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-share-link')).to.be.true;
  });

  it('should have accept class name', () => {
    const className = 'className';
    const wrapper = shallow(<ShareLink className={className} label="1" href="2" />);
    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should have correct link', () => {
    const label = 'label';
    const href = 'href';
    const wrapper = shallow(<ShareLink label={label} href={href} />);
    expect(wrapper.find('.pbg-desktop-label-link').text()).to.equal(label);
  });
});
