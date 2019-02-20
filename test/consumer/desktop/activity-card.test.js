import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import ActivityCard from '../../../components/consumer/desktop/activity-card';

describe('ActivityCard', () => {
  describe('rendering', () => {
    it('should have a correct wrapper element', () => {
      const wrapper = shallow(<ActivityCard />);

      expect(wrapper.hasClass('activity-card')).to.be.equal(true);
    });

    it('should render an ActivityThumbnail', () => {
      const wrapper = shallow(<ActivityCard type="purchase_updated" />);
      expect(wrapper.html()).to.include('<img');
    });

    it('should render a title', () => {
      const title = "Purchase updated";
      const wrapper = shallow(<ActivityCard type="purchase_updated" title={title} />);
      expect(wrapper.html()).to.include(title);
    });

    it('should render a description', () => {
      const title = "Purchase updated";
      const description = "User changed the price from $2,000 to $20,000.";
      const wrapper = shallow(<ActivityCard type="purchase_updated" title={title}>{description}</ActivityCard>);
      expect(wrapper.contains(description)).to.be.true;
    });

    it('should render the time of the activity', () => {
      const title = "Purchase updated";
      const description = "User changed the price from $2,000 to $20,000.";
      const dateTime = new Date("2018-01-08T14:57:00Z");
      const wrapper = shallow(<ActivityCard type="purchase_updated" title={title} time={dateTime}>{description}</ActivityCard>);
      expect(wrapper.html()).to.include(moment(dateTime).format("hh:mm A"));
    });
  });
});