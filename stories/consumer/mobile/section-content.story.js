import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withContainer, wrapStory, withMiddleSizing } from '../../util/decorators';
import SectionContent from '../../../components/consumer/mobile/section-content';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Section Components/expandable-section', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withMiddleSizing)
  .add('compact', () => (
    <SectionContent
      title="Label"
      secondaryText="Secondary Text"
      showText="Show more"
      hideText="Hide"
      onClick={action('Click')}
    >
      My Awesome Content
    </SectionContent>
  ))
  .add('expanded', () => (
    <SectionContent
      expanded
      title="Label"
      secondaryText="Secondary Text"
      showText="Show more"
      hideText="Hide"
      onClick={action('Click')}
    >
      My Awesome Content
    </SectionContent>
  ))
  .add('full-preview', () => <SectionContentPreview />);

class SectionContentPreview extends React.PureComponent {
  state = { expanded: false };

  onClick = () => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  };

  render() {
    const { expanded } = this.state;
    return (
      <SectionContent
        expanded={expanded}
        title="Label"
        secondaryText="Secondary Text"
        showText="Show more"
        hideText="Hide"
        onClick={this.onClick}
      >
        My Awesome Content
      </SectionContent>
    );
  }
}
