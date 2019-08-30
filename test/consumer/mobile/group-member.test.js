import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import GroupMember from '../../../components/consumer/mobile/group-member';
import Avatar from '../../../components/consumer/mobile/avatar';

describe('group-member', () => {
  const myAvatar = 'myAvatar';
  const hint = 'hint';
  const fullName = 'fullName';

  it('should have correct class names', () => {
    const wrapper = shallow(<GroupMember avatar={myAvatar} fullName={fullName} hint={hint} />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-group-member')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<GroupMember className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should have correct avatar', () => {
    const wrapper = shallow(<GroupMember avatar={myAvatar} fullName={fullName} hint={hint} />);
    expect(wrapper.find(Avatar).prop('src')).to.equal(myAvatar);
  });

  it('should have correct label and hint', () => {
    const wrapper = shallow(<GroupMember avatar={myAvatar} fullName={fullName} hint={hint} />);
    expect(wrapper.find('.pbg-mobile-label-normal').text()).to.equal(fullName);
    expect(wrapper.find('.pbg-mobile-label-secondary').text()).to.equal(hint);
  });

  it('should not have hint', () => {
    const wrapper = shallow(<GroupMember avatar={myAvatar} fullName={fullName} />);
    expect(wrapper.find('.pbg-mobile-label-normal').text()).to.equal(fullName);
    expect(wrapper.find('.pbg-mobile-label-secondary').length).to.equal(0);
  });
});
