import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import ActivityThumbnail from '../../../components/consumer/desktop/activity-thumbnail';
import ActivityComment from '../../../components/consumer/desktop/activity-comment';

describe('ActivityComment', () => {
  describe('rendering', () => {
    it('should have a correct wrapper element', () => {
      const wrapper = shallow(<ActivityComment />);

      expect(wrapper.hasClass('activity-comment')).to.be.equal(true);
    });

    it('should render an ActivityThumbnail with an img src', () => {
      const src = 'https://myimage.com';
      const wrapper = shallow(<ActivityComment src={src} />);
      expect(wrapper.find(ActivityThumbnail).length).to.be.equal(1);
    });

    it('should render an ActivityThumbnail with an userId ', () => {
      const userId = '01234567-abcd-abcd-abcd-0123456789ab';
      const wrapper = shallow(<ActivityComment userId={userId} />);
      expect(wrapper.find(ActivityThumbnail).length).to.be.equal(1);
    });

    it('should render a title', () => {
      const title = "John Doe";
      const userId = '01234567-abcd-abcd-abcd-0123456789ab';
      const wrapper = shallow(<ActivityComment userId={userId} title={title} />);
      expect(wrapper.html()).to.include(title);
    });

    it('should render the comment contents', () => {
      const title = "John Doe";
      const comment = "This is a longer user comment to demonstrate how the comment bubble should behave when there are multiple lines of text. Lorerm ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque.";
      const userId = '01234567-abcd-abcd-abcd-0123456789ab';
      const wrapper = shallow(<ActivityComment userId={userId} title={title} comment={comment} />);
      expect(wrapper.html()).to.include(comment);
    });

    it('should render the time of the comment', () => {
      const title = "John Doe";
      const comment = "This is a longer user comment to demonstrate how the comment bubble should behave when there are multiple lines of text. Lorerm ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque.";
      const userId = '01234567-abcd-abcd-abcd-0123456789ab';
      const dateTime = new Date();
      const wrapper = shallow(<ActivityComment userId={userId} title={title} comment={comment} time={dateTime} />);
      expect(wrapper.html()).to.include(moment(dateTime).format("hh:mm A"));
    });
  });
});