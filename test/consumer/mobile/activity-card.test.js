import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { ActivityCard, UserCommentCard } from '../../../components/consumer/mobile/activity-card';
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
      const children = <div><p>some content</p></div>;
      const wrapper = shallow(<ActivityCard>{children}</ActivityCard>);
      expect(wrapper.contains(children)).to.be.true;
    });
  });

  describe('User Comment Card', () => {
    it('should be type white', () => {
      const wrapper = mount(<UserCommentCard />);
      expect(wrapper.find(ActivityCard).props().type).to.equal(ActivityCard.types.white);
    });

    it('should pass date', () => {
      const date = new Date('1984-10-09T19:02');
      const wrapper = mount(<UserCommentCard date={date}/>);
      expect(wrapper.find(ActivityCard).props().date).to.equal(date);
      expect(wrapper.contains(<Hint>07:02 pm</Hint>)).to.be.true;
    });

    it.skip('should have an avatar', () => {
    });

    it('should have a heading 3 with user name', () => {
      const userName = 'John Doe';
      const wrapper = mount(<UserCommentCard userName={userName}/>);
      expect(wrapper.contains(<H3>{userName}</H3>)).to.be.true;
    });

    it('should have a p element with the comment text', () => {
      const comment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
      const wrapper = mount(<UserCommentCard comment={comment}/>);
      expect(wrapper.contains(<p>{comment}</p>)).to.be.true;
    });
  });
});
