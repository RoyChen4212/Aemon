import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import {
  ActivityCard,
  UserCommentCard,
  GroupActivityCard,
} from '../../../components/consumer/mobile/activity-card';
import ActivityThumbnail, {
  PURCHASE_UPDATED,
} from '../../../components/consumer/mobile/activity-thumbnail';
import Avatar from '../../../components/consumer/mobile/avatar';
import Hint from '../../../components/consumer/mobile/hint';
import { H3 } from '../../../components/consumer/mobile/heading';

describe('Activity Card', () => {
  describe('Generic card', () => {
    it('should have correct class', () => {
      const wrapper = shallow(<ActivityCard />);
      expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
      expect(wrapper.hasClass('pbg-activity-card')).to.be.true;
    });

    it('should have date hint', () => {
      const wrapper = mount(<ActivityCard />);
      expect(wrapper.find('.pbg-hint')).to.have.lengthOf(1);
    });

    it('should print correct am time', () => {
      const date = new Date('1984-10-09T11:02');
      const wrapper = shallow(<ActivityCard date={date} />);
      expect(wrapper.contains(<Hint>11:02 am</Hint>)).to.be.true;
    });

    it('should print correct pm time', () => {
      const date = new Date('1984-10-09T19:02');
      const wrapper = shallow(<ActivityCard date={date} />);
      expect(wrapper.contains(<Hint>07:02 pm</Hint>)).to.be.true;
    });

    it('should have correct class for type white', () => {
      const date = new Date('1984-10-09T19:02');
      const wrapper = shallow(<ActivityCard type={ActivityCard.types.white} />);
      expect(wrapper.hasClass('pbg-activity-card-white')).to.be.true;
    });

    it('should pass any children', () => {
      const children = (
        <div>
          <p>some content</p>
        </div>
      );
      const wrapper = shallow(<ActivityCard>{children}</ActivityCard>);
      expect(wrapper.contains(children)).to.be.true;
    });
  });

  describe('User Comment Card', () => {
    it('should be type white', () => {
      const wrapper = mount(<UserCommentCard />);
      expect(wrapper.find(ActivityCard).props().type).to.equal(
        ActivityCard.types.white
      );
    });

    it('should have pbg-user-comment-card class', () => {
      const wrapper = shallow(<UserCommentCard />);
      expect(wrapper.hasClass('pbg-user-comment-card')).to.be.true;
    });

    it('should pass date', () => {
      const date = new Date('1984-10-09T19:02');
      const wrapper = mount(<UserCommentCard date={date} />);
      expect(wrapper.find(ActivityCard).props().date).to.equal(date);
      expect(wrapper.contains(<Hint>07:02 pm</Hint>)).to.be.true;
    });

    it('should have an avatar', () => {
      const wrapper = mount(<UserCommentCard />);
      expect(wrapper.find(Avatar)).to.have.lengthOf(1);
    });

    it('should pass userId to Avatar', () => {
      const expected = 'some-id';
      const wrapper = mount(<UserCommentCard userId={expected} />);
      expect(wrapper.find(Avatar).props().userId).to.equal(expected);
    });

    it('should pass userAvatar as src to Avatar', () => {
      const expected = 'some/url';
      const wrapper = mount(<UserCommentCard src={expected} />);
      expect(wrapper.find(Avatar).props().src).to.equal(expected);
    });

    it('should have a heading 3 with user name', () => {
      const userName = 'John Doe';
      const wrapper = mount(<UserCommentCard title={userName} />);
      expect(wrapper.contains(<H3>{userName}</H3>)).to.be.true;
    });

    it('should have a p element with the comment text', () => {
      const comment =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
      const wrapper = mount(<UserCommentCard comment={comment} />);
      expect(wrapper.contains(<p>{comment}</p>)).to.be.true;
    });
  });

  describe('Group Activity Card', () => {
    it('should have no type', () => {
      const wrapper = mount(<GroupActivityCard />);
      expect(wrapper.find(GroupActivityCard).props().type).to.be.undefined;
    });

    it('should have pbg-group-activity-card class', () => {
      const wrapper = shallow(<GroupActivityCard />);
      expect(wrapper.hasClass('pbg-group-activity-card')).to.be.true;
    });

    it('should pass date', () => {
      const date = new Date('1984-10-09T19:02');
      const wrapper = mount(<GroupActivityCard date={date} />);
      expect(wrapper.find(ActivityCard).props().date).to.equal(date);
      expect(wrapper.contains(<Hint>07:02 pm</Hint>)).to.be.true;
    });

    it('should have an activity thumbnail', () => {
      const wrapper = mount(<GroupActivityCard />);
      expect(wrapper.find(ActivityThumbnail)).to.have.lengthOf(1);
    });

    it('should pass type to activity thumbnail', () => {
      const wrapper = mount(<GroupActivityCard type={PURCHASE_UPDATED} />);
      expect(wrapper.find(ActivityThumbnail).props().type).to.equal(
        PURCHASE_UPDATED
      );
    });

    it('should pass a title to activity card as an H3 element', () => {
      const title = 'Some title';
      const wrapper = shallow(
        <GroupActivityCard type={PURCHASE_UPDATED} title={title} />
      );
      expect(wrapper.contains(<H3>{title}</H3>)).to.be.true;
    });

    it('should pass children to activity card as children within a container', () => {
      const content = (
        <div>
          <p>Txt one</p>
          <p>Text two</p>
        </div>
      );
      const wrapper = mount(<GroupActivityCard>{content}</GroupActivityCard>);
      expect(wrapper.find('.pbg-group-activity-card-content').contains(content))
        .to.be.true;
    });
  });
});
