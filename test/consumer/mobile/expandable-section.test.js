import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ExpandableSection from '../../../components/consumer/mobile/expandable-section';
import { SmallButton } from '../../../components/consumer/mobile/button';

describe('expandable-section', () => {
  const title = 'label';
  const secondaryText = 'secondaryText';
  const showText = 'showText';
  const hideText = 'hideText';

  it('should have correct class names', () => {
    const wrapper = shallow(
      <ExpandableSection
        title={title}
        hint={secondaryText}
        showText={showText}
        hideText={hideText}
        defaultExpanded={false}
      >
        Awesome Content
      </ExpandableSection>
    );
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-expandable-section')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<ExpandableSection className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should have correct title and secondary Text', () => {
    const wrapper = shallow(
      <ExpandableSection
        title={title}
        hint={secondaryText}
        showText={showText}
        hideText={hideText}
        defaultExpanded={false}
      >
        Awesome Content
      </ExpandableSection>
    );
    expect(wrapper.find('.pbg-mobile-heading-2').text()).to.equal(title);
    expect(wrapper.find('.pbg-mobile-label-secondary').text()).to.equal(secondaryText);
  });

  it('should not have children when not expanded and show showText', () => {
    const wrapper = shallow(
      <ExpandableSection
        title={title}
        hint={secondaryText}
        showText={showText}
        hideText={hideText}
        defaultExpanded={false}
      >
        Awesome Content
      </ExpandableSection>
    );
    expect(wrapper.find('.pbg-expandable-section-children').length).to.equal(0);
    expect(wrapper.find(SmallButton).prop('children')).to.equal(showText);
  });

  it('should have children when expanded and show hideText', () => {
    const wrapper = shallow(
      <ExpandableSection
        title={title}
        hint={secondaryText}
        showText={showText}
        hideText={hideText}
        defaultExpanded
      >
        Awesome Content
      </ExpandableSection>
    );
    expect(wrapper.find('.pbg-expandable-section-children').length).to.equal(1);
    expect(wrapper.find(SmallButton).prop('children')).to.equal(hideText);
  });

  it('should react onClick', () => {
    const wrapper = shallow(
      <ExpandableSection
        title={title}
        hint={secondaryText}
        showText={showText}
        hideText={hideText}
        defaultExpanded
      >
        Awesome Content
      </ExpandableSection>
    );
    expect(wrapper.state().expanded).to.be.true;

    wrapper.find(SmallButton).simulate('click');
    wrapper.update();

    expect(wrapper.state().expanded).to.be.false;
  });
});
