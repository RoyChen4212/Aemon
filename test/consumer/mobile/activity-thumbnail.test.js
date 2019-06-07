import React from 'react';
import { shallow } from 'enzyme';

import ActivityThumbnail, {
  PURCHASE_COMMENT_CREATED,
  PURCHASE_UPDATED,
} from '../../../components/consumer/mobile/activity-thumbnail';
import Avatar from '../../../components/consumer/mobile/avatar';

describe('Mobile ActivityThumbnail', () => {
  it('should have the bg-activity-thumbnail and pbg-consumer-mobile classNames', () => {
    const wrapper = shallow(<ActivityThumbnail type={PURCHASE_UPDATED} />);
    expect(wrapper.hasClass('pbg-activity-thumbnail')).to.be.true;
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
  });

  it('should render a user avatar if type is purchase_comment_created and src are passed as props', () => {
    const wrapper = shallow(<ActivityThumbnail type={PURCHASE_COMMENT_CREATED} src="https://myimage.com" />);
    expect(wrapper.find(Avatar).prop('src')).to.include('https://myimage.com');
  });

  it('should render a user avatar if type is purchase_comment_created and userId are passed as props', () => {
    const wrapper = shallow(
      <ActivityThumbnail type={PURCHASE_COMMENT_CREATED} userId="01234567-abcd-abcd-abcd-0123456789ab" />
    );
    expect(wrapper.find(Avatar).html()).to.include('<svg');
  });
});
