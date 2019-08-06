import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import ExpandableSection from '../../../components/consumer/mobile/expandable-section';
import { SmallButton } from '../../../components/consumer/mobile/button';

describe('expandable-section', () => {
  const title = 'label';
  const secondaryText = 'secondaryText';
  const showText = 'showText';
  const hideText = 'hideText';

  it('should have correct class names', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <ExpandableSection
        title={title}
        secondaryText={secondaryText}
        showText={showText}
        hideText={hideText}
        expanded={false}
        onClick={onClick}
      >
        Awesome Content
      </ExpandableSection>
    );
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-expandable-section')).to.be.true;
  });

  it('should have correct title and secondary Text', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <ExpandableSection
        title={title}
        secondaryText={secondaryText}
        showText={showText}
        hideText={hideText}
        expanded={false}
        onClick={onClick}
      >
        Awesome Content
      </ExpandableSection>
    );
    expect(wrapper.find('.pbg-mobile-heading-2').text()).to.equal(title);
    expect(wrapper.find('.pbg-mobile-label-secondary').text()).to.equal(secondaryText);
  });

  it('should not have children when not expanded and show showText', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <ExpandableSection
        title={title}
        secondaryText={secondaryText}
        showText={showText}
        hideText={hideText}
        expanded={false}
        onClick={onClick}
      >
        Awesome Content
      </ExpandableSection>
    );
    expect(wrapper.find('.pbg-expandable-section-children').length).to.equal(0);
    expect(wrapper.find(SmallButton).prop('children')).to.equal(showText);
  });

  it('should have children when expanded and show hideText', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <ExpandableSection
        title={title}
        secondaryText={secondaryText}
        showText={showText}
        hideText={hideText}
        expanded
        onClick={onClick}
      >
        Awesome Content
      </ExpandableSection>
    );
    expect(wrapper.find('.pbg-expandable-section-children').length).to.equal(1);
    expect(wrapper.find(SmallButton).prop('children')).to.equal(hideText);
  });

  it('should react onClick', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <ExpandableSection
        title={title}
        secondaryText={secondaryText}
        showText={showText}
        hideText={hideText}
        expanded
        onClick={onClick}
      >
        Awesome Content
      </ExpandableSection>
    );

    wrapper.find(SmallButton).simulate('click');

    expect(onClick.calledOnce).to.be.true;
  });
});
