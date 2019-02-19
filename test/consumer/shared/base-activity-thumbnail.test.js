import React from 'react';
import { shallow } from 'enzyme';

import ActivityThumbnail, {
  PURCHASE_UPDATED,
  PURCHASE_CLAIMED,
  MEMBER_INVITED,
  MEMBER_JOINED,
  MEMBER_WITHDREW,
  PURCHASE_TIPPED,
  PURCHASE_UNTIPPED,
  PAYMENT_AUTHORIZED,
  PAYMENT_CAPTURED,
  PURCHASE_COMPLETED,
  PURCHASE_COMMENT_CREATED,
} from '../../../components/consumer/shared/base-activity-thumbnail';


describe('BaseActivityThumbnail', () => {
  it('should have the activity-thumbnail className', () => {
    const wrapper = shallow(<ActivityThumbnail type={PURCHASE_UPDATED} />);

    expect(wrapper.hasClass('activity-thumbnail')).to.equal(true);
  });

  describe('Props', () => {
    it('should not throw if bad type is given', () => {
      expect(() => shallow(<ActivityThumbnail type="some bad type" />)).not.to.throw();
    });

    it('should set "size" prop as width and height', () => {
      const size = 40;
      const wrapper = shallow(<ActivityThumbnail size={size} type={PURCHASE_UPDATED} />);

      expect(wrapper.find('img').prop('width')).to.equal(size);
    });

    it('should render the purchase_updated icon when passing type="purchase_updated" prop', () => {
      const wrapper = shallow(<ActivityThumbnail type={PURCHASE_UPDATED} />);

      expect(wrapper.find('img').prop('src')).to.include(PURCHASE_UPDATED);
    });

    it('should render the purchase_claimed icon when passing type="purchase_claimed" prop', () => {
      const wrapper = shallow(<ActivityThumbnail type={PURCHASE_CLAIMED} />);

      expect(wrapper.find('img').prop('src')).to.include(PURCHASE_CLAIMED);
    });

    it('should render the member_invited icon when passing type="member_invited" prop', () => {
      const wrapper = shallow(<ActivityThumbnail type={MEMBER_INVITED} />);

      expect(wrapper.find('img').prop('src')).to.include(MEMBER_INVITED);
    });

    it('should render the member_joined icon when passing type="member_joined" prop', () => {
      const wrapper = shallow(<ActivityThumbnail type={MEMBER_JOINED} />);

      expect(wrapper.find('img').prop('src')).to.include(MEMBER_JOINED);
    });

    it('should render the member_withdrew icon when passing type="member_withdrew" prop', () => {
      const wrapper = shallow(<ActivityThumbnail type={MEMBER_WITHDREW} />);

      expect(wrapper.find('img').prop('src')).to.include(MEMBER_WITHDREW);
    });

    it('should render the purchase_tipped icon when passing type="purchase_tipped" prop', () => {
      const wrapper = shallow(<ActivityThumbnail type={PURCHASE_TIPPED} />);

      expect(wrapper.find('img').prop('src')).to.include(PURCHASE_TIPPED);
    });

    it('should render the purchase_untipped icon when passing type="purchase_untipped" prop', () => {
      const wrapper = shallow(<ActivityThumbnail type={PURCHASE_UNTIPPED} />);

      expect(wrapper.find('img').prop('src')).to.include(PURCHASE_UNTIPPED);
    });

    it('should render the payment_authorized icon when passing type="payment_authorized" prop', () => {
      const wrapper = shallow(<ActivityThumbnail type={PAYMENT_AUTHORIZED} />);

      expect(wrapper.find('img').prop('src')).to.include(PAYMENT_AUTHORIZED);
    });

    it('should render the payment_captured icon when passing type="payment_captured" prop', () => {
      const wrapper = shallow(<ActivityThumbnail type={PAYMENT_CAPTURED} />);

      expect(wrapper.find('img').prop('src')).to.include(PAYMENT_CAPTURED);
    });

    it('should render the purchase_completed icon when passing type="purchase_completed" prop', () => {
      const wrapper = shallow(<ActivityThumbnail type={PURCHASE_COMPLETED} />);

      expect(wrapper.find('img').prop('src')).to.include(PURCHASE_COMPLETED);
    });

    it('should throw if avatar is attempted to render', () => {
      expect(() => {
        shallow(<ActivityThumbnail type={PURCHASE_COMMENT_CREATED} userId="01234567-abcd-abcd-abcd-0123456789ab" />);
      }).to.throw();
    });
  });
});