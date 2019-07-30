import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory } from '../../util/decorators';

import Colors from '../../../components/consumer/global/colors';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Global/Colors', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('dark-blue', () => <Colors color="dark-blue" label="Dark Blue" labelGrade={60} />)
  .add('blue', () => <Colors color="blue" label="Blue" labelGrade={60} />)
  .add('gray', () => <Colors color="gray" label="Gray" labelGrade={100} />)
  .add('yellow', () => <Colors color="yellow" label="Yellow" labelGrade={60} />)
  .add('teal', () => <Colors color="teal" label="Teal" labelGrade={60} />)
  .add('teal', () => <Colors color="teal" label="Teal" labelGrade={60} />)
  .add('purple', () => <Colors color="purple" label="Purple" labelGrade={60} />)
  .add('green', () => <Colors color="green" label="Green" labelGrade={60} />)
  .add('red', () => <Colors color="red" label="Red" labelGrade={60} />)
  .add('pink', () => <Colors color="pink" label="Pink" labelGrade={60} />)
  .add('orange', () => <Colors color="orange" label="Orange" labelGrade={60} />);
