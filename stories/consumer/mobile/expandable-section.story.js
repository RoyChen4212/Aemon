import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withContainer, wrapStory, withMiddleSizing } from '../../util/decorators';
import ExpandableSection from '../../../components/consumer/mobile/expandable-section';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Section Components/expandable-section', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withMiddleSizing)
  .add('compact', () => (
    <ExpandableSection
      title="Label"
      secondaryText="Secondary Text"
      showText="Show more"
      hideText="Hide"
      onClick={action('Click')}
    >
      My Awesome Content
    </ExpandableSection>
  ))
  .add('expanded', () => (
    <ExpandableSection
      expanded
      title="Label"
      secondaryText="Secondary Text"
      showText="Show more"
      hideText="Hide"
      onClick={action('Click')}
    >
      My Awesome Content
    </ExpandableSection>
  ))
  .add('full-preview', () => <ExpandableSectionPreview />);

class ExpandableSectionPreview extends React.PureComponent {
  state = { expanded: false };

  onClick = () => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  };

  render() {
    const { expanded } = this.state;
    return (
      <ExpandableSection
        expanded={expanded}
        title="Label"
        secondaryText="Secondary Text"
        showText="Show more"
        hideText="Hide"
        onClick={this.onClick}
      >
        My Awesome Content
      </ExpandableSection>
    );
  }
}
