import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ExternalLink from '../../../components/consumer/mobile/external-link';

describe('ExternalLink', () => {
  it('should have correct class name', () => {
    const labelText = 'test';
    const wrapper = shallow(<ExternalLink label={labelText} />);
    expect(wrapper.hasClass('pbg-external-link')).to.be.true;
  });

  it('should have correct label', () => {
    const labelText = 'test';
    const wrapper = shallow(<ExternalLink label={labelText} />);
    expect(wrapper.find('.pbg-label-clickable').text()).to.equal(labelText);
  });

  it('should be clickable', () => {
    const labelText = 'test';
    const onClick = sinon.spy();
    const wrapper = shallow(<ExternalLink label={labelText} onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick.calledOnce).to.be.true;
  });
});
