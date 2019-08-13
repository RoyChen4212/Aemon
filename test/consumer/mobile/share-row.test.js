import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ShareRow from '../../../components/consumer/mobile/share-row';
import ShareDetailsOverlay from '../../../components/consumer/mobile/share-row/share-details-overlay';
import { colorTypes } from '../../../components/consumer/shared/color-types';
import Overlay from '../../../components/consumer/mobile/overlay';
import { SmallButton } from '../../../components/consumer/mobile/button';
import Divider from '../../../components/consumer/mobile/divider';
import colorCodes from '../../../components/consumer/shared/scss/_styleguide.scss';

describe('ShareRow', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<ShareRow label="label" hint="hint" amount="amount" color={colorTypes.BLUE_60} />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-share-row')).to.be.true;
  });

  it('should have label', () => {
    const labelText = 'label';
    const wrapper = shallow(<ShareRow label={labelText} hint="hint" amount="amount" color={colorTypes.BLUE_60} />);
    const label = wrapper.find('.pbg-mobile-label-normal');
    expect(label.length).to.equal(1);
    expect(label.text()).to.equal(labelText);
  });

  it('should render hint', () => {
    const hintText = 'hint';
    const wrapper = shallow(<ShareRow label="label" hint={hintText} amount="amount" color={colorTypes.BLUE_60} />);
    const hint = wrapper.find('.pbg-mobile-small-normal');
    expect(hint.length).to.equal(1);
    expect(hint.text()).to.equal(hintText);
  });

  it('should render amount', () => {
    const amount = 'amount';
    const wrapper = shallow(<ShareRow label="label" hint="hint" amount={amount} color={colorTypes.BLUE_60} />);
    const amountLabel = wrapper.find('.pbg-share-row-label-container').find('.pbg-mobile-label-secondary');
    expect(amountLabel.length).to.equal(1);
    expect(amountLabel.text()).to.equal(amount);
  });

  it('should render dynamic border color', () => {
    const color = colorTypes.RED_10;
    const wrapper = shallow(<ShareRow label="label" hint="hint" amount="amount" color={color} />);
    const container = wrapper.find('.pbg-share-row');
    expect(container.prop('style')).to.eql({ borderColor: colorCodes[color] });
  });

  it('should not render detail content when prop is not passed', () => {
    const wrapper = shallow(<ShareRow label="label" hint="hint" amount="amount" color={colorTypes.BLUE_60} />);
    const overlay = wrapper.find(Overlay);
    expect(overlay.length).to.equal(0);
  });

  it('should render overlay', () => {
    const wrapper = shallow(
      <ShareRow
        label="label"
        hint="hint"
        amount="amount"
        color={colorTypes.BLUE_60}
        detailsText="detail"
        detailsContent={<ShareDetailsOverlay share="share" fee="fee" total="total" />}
      />
    );
    const overlay = wrapper.find(Overlay);
    expect(overlay.length).to.equal(1);
  });

  it('should open detail content overlay when click detail button', () => {
    const wrapper = shallow(
      <ShareRow
        label="label"
        hint="hint"
        amount="amount"
        color={colorTypes.BLUE_60}
        detailsText="detail"
        detailsContent={<ShareDetailsOverlay share="share" fee="fee" total="total" />}
      />
    );
    const overlay = wrapper.find(Overlay);
    wrapper.find(SmallButton).simulate('click');

    expect(overlay.find(ShareDetailsOverlay).length).to.equal(1);
    expect(wrapper.state().overlayOpened).to.be.true;
  });

  it('should close detail content overlay when back button clicked', () => {
    const wrapper = shallow(
      <ShareRow
        label="label"
        hint="hint"
        amount="amount"
        color={colorTypes.BLUE_60}
        detailsText="detail"
        detailsContent={<ShareDetailsOverlay share="share" fee="fee" total="total" />}
      />
    );
    const overlay = wrapper.find(Overlay).dive();
    wrapper.find(SmallButton).simulate('click');
    expect(wrapper.state().overlayOpened).to.be.true;
    overlay
      .find('.pbg-mobile-label-link')
      .first()
      .simulate('click');
    expect(wrapper.state().overlayOpened).to.be.false;
  });
});

describe('ShareDetailsOverlay', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<ShareDetailsOverlay share="share" fee="fee" total="total" />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-share-details-overlay')).to.be.true;
  });

  it('should render title', () => {
    const title = 'title';
    const wrapper = shallow(<ShareDetailsOverlay title={title} share="share" fee="fee" total="total" />);
    const titleWrapper = wrapper.find('.pbg-mobile-heading-1');
    expect(titleWrapper.length).to.equal(1);
    expect(titleWrapper.text()).to.equal(title);
  });

  it('should render descriptionLabel', () => {
    const descriptionLabel = 'descriptionLabel';
    const wrapper = shallow(
      <ShareDetailsOverlay descriptionLabel={descriptionLabel} share="share" fee="fee" total="total" />
    );
    const rowWrappers = wrapper.find('.pbg-share-details-overlay-row');
    expect(rowWrappers.length).to.equal(4);
    expect(
      rowWrappers
        .at(0)
        .find('.pbg-mobile-label-secondary')
        .first()
        .text()
    ).to.equal(descriptionLabel);
  });

  it('should render maxAmountLabel', () => {
    const maxAmountLabel = 'maxAmountLabel';
    const wrapper = shallow(
      <ShareDetailsOverlay maxAmountLabel={maxAmountLabel} share="share" fee="fee" total="total" />
    );
    const rowWrappers = wrapper.find('.pbg-share-details-overlay-row');
    expect(
      rowWrappers
        .at(0)
        .find('.pbg-mobile-label-secondary')
        .last()
        .text()
    ).to.equal(maxAmountLabel);
  });

  it('should render shareLabel', () => {
    const shareLabel = 'shareLabel';
    const wrapper = shallow(<ShareDetailsOverlay shareLabel={shareLabel} share="share" fee="fee" total="total" />);
    const rowWrappers = wrapper.find('.pbg-share-details-overlay-row');
    expect(
      rowWrappers
        .at(1)
        .find('.pbg-mobile-label-normal')
        .first()
        .text()
    ).to.equal(shareLabel);
  });

  it('should render share', () => {
    const share = 'share';
    const wrapper = shallow(<ShareDetailsOverlay share={share} fee="fee" total="total" />);
    const rowWrappers = wrapper.find('.pbg-share-details-overlay-row');
    expect(
      rowWrappers
        .at(1)
        .find('.pbg-mobile-label-normal')
        .last()
        .text()
    ).to.equal(share);
  });

  it('should render feeLabel', () => {
    const feeLabel = 'feeLabel';
    const wrapper = shallow(<ShareDetailsOverlay feeLabel={feeLabel} share="share" fee="fee" total="total" />);
    const rowWrappers = wrapper.find('.pbg-share-details-overlay-row');
    expect(
      rowWrappers
        .at(2)
        .find('.pbg-mobile-label-normal')
        .first()
        .text()
    ).to.equal(feeLabel);
  });

  it('should render fee', () => {
    const fee = 'fee';
    const wrapper = shallow(<ShareDetailsOverlay share="share" fee={fee} total="total" />);
    const rowWrappers = wrapper.find('.pbg-share-details-overlay-row');
    expect(
      rowWrappers
        .at(2)
        .find('.pbg-mobile-label-normal')
        .last()
        .text()
    ).to.equal(fee);
  });

  it('should render divider', () => {
    const wrapper = shallow(<ShareDetailsOverlay share="share" fee="fee" total="total" />);
    expect(wrapper.find(Divider).length).to.equal(3);
  });

  it('should render totalLabel', () => {
    const totalLabel = 'totalLabel';
    const wrapper = shallow(<ShareDetailsOverlay totalLabel={totalLabel} share="share" fee="fee" total="total" />);

    expect(
      wrapper
        .find('.pbg-share-details-overlay-row')
        .last()
        .find('.pbg-mobile-label-secondary')
        .text()
    ).to.equal(totalLabel);
  });

  it('should render total', () => {
    const total = 'total';
    const wrapper = shallow(<ShareDetailsOverlay total={total} share="share" fee="fee" />);

    expect(
      wrapper
        .find('.pbg-share-details-overlay-row')
        .last()
        .find('.pbg-mobile-label-normal')
        .text()
    ).to.equal(total);
  });
});
