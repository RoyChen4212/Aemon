import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import ShareRow from '../../../components/consumer/desktop/share-row';
import ShareDetailsPopover from '../../../components/consumer/desktop/share-row/share-details-popover';
import { colorTypes } from '../../../components/consumer/shared/color-types';
import Popover from '../../../components/consumer/desktop/popover';

describe('ShareRow', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<ShareRow label="label" hint="hint" amount="amount" color={colorTypes.BLUE_60} />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-share-row')).to.be.true;
  });

  it('should have label', () => {
    const labelText = 'label';
    const wrapper = shallow(<ShareRow label={labelText} hint="hint" amount="amount" color={colorTypes.BLUE_60} />);
    const label = wrapper.find('.pbg-desktop-label-normal');
    expect(label.length).to.equal(1);
    expect(label.text()).to.equal(labelText);
  });

  it('should render hint', () => {
    const hintText = 'hint';
    const wrapper = shallow(<ShareRow label="label" hint={hintText} amount="amount" color={colorTypes.BLUE_60} />);
    const hint = wrapper.find('.pbg-desktop-secondary-text');
    expect(hint.length).to.equal(1);
    expect(hint.text()).to.equal(hintText);
  });

  it('should render amount', () => {
    const amount = 'amount';
    const wrapper = shallow(<ShareRow label="label" hint="hint" amount={amount} color={colorTypes.BLUE_60} />);
    const amountLabel = wrapper.find('.pbg-share-row-amount-wrapper').find('.pbg-desktop-label-strong');
    expect(amountLabel.length).to.equal(1);
    expect(amountLabel.text()).to.equal(amount);
  });

  it('should render dynamic border color', () => {
    const color = colorTypes.RED_10;
    const wrapper = shallow(<ShareRow label="label" hint="hint" amount="amount" color={color} />);
    const container = wrapper.find('.pbg-share-row');
    expect(container.prop('style')).to.eql({ borderColor: color });
  });

  it('should not render detail content when prop is not passed', () => {
    const wrapper = shallow(<ShareRow label="label" hint="hint" amount="amount" color={colorTypes.BLUE_60} />);
    const popover = wrapper.find(Popover);
    expect(popover.length).to.equal(0);
  });

  it('should render popover', () => {
    const wrapper = shallow(
      <ShareRow
        label="label"
        hint="hint"
        amount="amount"
        color={colorTypes.BLUE_60}
        detailsText="detail"
        detailsContent={<ShareDetailsPopover share="share" fee="fee" total="total" />}
      />
    );
    const popover = wrapper.find(Popover);
    expect(popover.length).to.equal(1);
  });

  it('should render detail content when click detail link', () => {
    const wrapper = mount(
      <ShareRow
        label="label"
        hint="hint"
        amount="amount"
        color={colorTypes.BLUE_60}
        detailsText="detail"
        detailsContent={<ShareDetailsPopover share="share" fee="fee" total="total" />}
      />
    );
    const popover = wrapper.find(Popover);
    wrapper.find('.pbg-desktop-small-link').simulate('click');

    expect(popover.find(ShareDetailsPopover).length).to.equal(1);
    expect(popover.instance().active).to.be.true;
  });
});
