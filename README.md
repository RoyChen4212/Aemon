# Aemon

Aemon is a the UI library that powers our consumer site (`varys`). Before starting work on this project, it's important to know and understand our development process:

* [Design + Dev Process](https://docs.google.com/document/d/187PdZdjwjTO4n1IQdK8VPZHtYhhjD_KmYb5u88aIO7U), how we bridge the gap between design and engineering
* [Dev Process](https://docs.google.com/document/d/1uCjFRPyoEttumeFD021zahaptu6-cU4zyLjV6Cx7qfg), a big picture about our development process

[![Maintainability](https://api.codeclimate.com/v1/badges/049592dcc0608f7011bd/maintainability)](https://codeclimate.com/repos/5c096be7dccec43bdc00bc36/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/049592dcc0608f7011bd/test_coverage)](https://codeclimate.com/repos/5c096be7dccec43bdc00bc36/test_coverage)
[![CircleCI](https://circleci.com/gh/paybygroup/aemon.svg?style=svg&circle-token=a3f162c4f1d7591843c96b61d5c5fd32f5efd83f)](https://circleci.com/gh/paybygroup/aemon)

## Getting Started

### Prerequisites

For development, you will only need Node.js installed in your environment. Please use the appropriate [EditorConfig plugin](https://editorconfig.org/#download) for your editor.

You should be able to run the following command after the installation procedure.

```
$ node --version
v10.14.0

$ npm --version
6.4.1
```

### Installing

First, clone `aemon` repo if you have not done so already.

```
$ git clone https://github.com/paybygroup.com/aemon.git
```

Then, install all node packages required by this project.

```
$ npm install
```

### Start & watch

The following command should start the Storybook server in a random port and open a new browser tab.

```
$ npm run storybook
```

Now you can develop your components, write stories, and see the changes in Storybook immediately since it uses Webpack’s hot module reloading.

## Running the tests

To run the whole testing suite:

```
$ npm test
```

To keep running the tests for a single component, run the following command:

```
$ npm run test:watch  -- ./test/consumer/desktop/your-component.test.js
```

To verify the test coverge, you can run:

```
$ npm run test:cover
$ open coverage/lcov-report/index.html
```

## File structure

```
.
|-- components
|   |-- consumer
|   |   |-- desktop
|   |   |   |-- activity-card
|   |   |   |   |-- activity-card.js
|   |   |   |   |-- index.js
|   |   |   |   `-- style.scss
|   |   |   ...
|   |   |   `-- index.js
|   |   |-- mobile
|   |   |   |-- activity-card
|   |   |   |   |-- activity-card.js
|   |   |   |   |-- index.js
|   |   |   |   `-- style.scss
|   |   |   ...
|   |   |   `-- index.js
|   |   `-- shared
|   |       |-- base-button.js
|   |       ...
|   |       `-- scss
|   |           `-- _styleguide.scss
|   |-- lib
|   `-- index.js
|-- stories
|   |-- consumer
|   |   |-- desktop
|   |   |   |-- activity-card.story.js
|   |   |   ...
|   |   `-- mobile
|   |       |-- activity-card.story.js
|   |       ...
|   ...
|-- test
|   |-- consumer
|   |   |-- desktop
|   |   |   |-- activity-card.test.js
|   |   |   ...
|   |   |-- mobile
|   |   |   |-- activity-card.test.js
|   |   |   ...
|   |   `-- shared
|   ...
...
```

The main directories are `components`, `stories` and `test`.

### components/

This is where all components are defined. They are classified as `desktop` or `mobile`. Every component is composed of tree files:

* `index.js`: imports the content of the component's main file
* `component-name.js`: contains the component's JS/JSX code
* `style.scss`: contains the component's CSS styles in SCSS

Besides above files, `components` folder also includes:

* `shared`: contains all shared components between `desktop` and `mobile`. It also contains the CSS style guide file (`scss/_styleguide.scss`).

### stories/

This is where all Storybook stories are defined. It has a very similar directory structure to `components`. There should be one story file per component. Each Storybook file is named after its component, but replace `.js` with the `.story.js` suffix.

### test/

This is where all unit tests are defined. It has a very similar directory structure to `components`. There should one test file per component named after it but replacing `.js` with `.story.js` suffix.

## Contributing

Before you continue reading, please take a look at our [SDLC Policy](https://docs.google.com/document/d/1LZ0Je3NdUr3SSNooKtX-RBry4IN8EGdXHLB66vw2ks0) if you haven't already.

### Principles & Good Practices

* Favor refactor over [premature generalization](http://wiki.c2.com/?PrematureGeneralization)
* Favor [composition over inheritance](http://wiki.c2.com/?CompositionInsteadOfInheritance)
* Don't introduce new dependencies to solve simple problems
* Read the existing components, tests, and stories. They could be a good reference.

### Development workflow

Regardless of whether you're adding a new component or updating an existing one, you can follow the following steps as a general guide:

* Create the component's story file under [stories directory](stories) if it doesn't exist yet
* Create or update the component's test file under [test directory](test) if it doesn't exist yet
* Create the component's files under [components directory](components) if they don't exist yet
* Start a local [Storybook](start--watch) server
* Start watching the [unit tests directory](running-the-tests)
* Write some tests covering the new structure and behavior
* Implement the structure and behavior you just defined in the unit test file
* Continue the tests/implementation cycle until the component is ready
* Add styles in the `.scss` file and see the progress on Storybook
* Expose your component by adding it to `/components/consumer/desktop/index.js` or `/components/consumer/mobile/index.js`

### Stories

[Storybook](https://storybook.js.org/) is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment.

Storybook stories should include a back reference URL to Figma. You can find that URL on the Pivotal Tracker story.

Use the following code to create the story for a new component:

```javascript
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory } from '../../util/decorators';
import MyComponent from '../../../components/consumer/desktop/my-component';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Info/my-component', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('my-component/default', () => <MyComponent />);
```

### Tests

We use [mocha](https://mochajs.org/#getting-started), [chai](https://www.chaijs.com/guide/), [enzyme](https://github.com/airbnb/enzyme#basic-usage), and [sinon](https://sinonjs.org/#get-started) for our component unit tests. While writing your component tests, make sure to:

* Have a 100% coverage of your component code
* Include test for the general behavior of the component
* Test all permutations generated by the props your component can receive
* Test all events your component can handle

Tests are only meant for component structure and behavior. Use Storybook to ensure the component complies with the Figma spec.

The following code can help you to start creating unit tests for a new component.

```javascript
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import MyComponent from '../../../components/consumer/desktop/my-component';

describe('my-component', () => {
  it('should have correct class', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-my-component')).to.be.true;
  });
});
```

### Components

When you are working on a component, keep in mind:

* All components here are [dumb](https://medium.com/@pramonowang/advanced-react-component-patterns-dumb-component-and-smart-component-4cb50fa63aa9); they receive all required text, data and functions via props
* Always prefix a component's CSS styles with `pbg-component-name` to avoid collisions
* Component's name should follow Figma specs

The following template can help you start a new component:

```javascript
import React from 'react';

import './style.scss';

class MyComponent extends React.PureComponent {
  baseClassName = 'pbg-consumer-desktop pbg-my-component';

  render = () => {
    return <div className={this.baseClassName} />;
  };
}

export default MyComponent;
```

#### Code duplication

Even though a code duplication is a code smell, we can go with a little bit of that to prevent premature generalizations. Having said that, we tackle code duplication with several strategies:

* Centralizing general use code in functions under `/components/consumer/lib`
* Extracting duplicated code into internal components inside the main component folder
* Generalizing common component code between `desktop` and `mobile` in base components under `components/consumer/shared`

For the last bullet, let the lead engineering team to decide wheather or not to move code into base components.

#### Code style

Our CI and code quality tools will catch most issues that may exist with your code when you create or update a pull request. However, you can run the lint locally before you push your changes:

```
npm lint components/desktop/my-component
```

The above line is also useful if our code quality tools raise issues and you dont have access to those. We also recomend you to configure your editor integration with [ESLint](https://eslint.org/docs/user-guide/integrations) and [Prettier](https://prettier.io/docs/en/editors.html).

Some style guidelines not covered by our quality code tools that you should take into account:

* Component props and methods for event handling should be named with `on` prefix (i.e. `onChange`, `onFocus`)
* Component methods that return JSX should be named with `render` prefix (i.e. `renderError`, `renderInput`)
* Component method order should be: `static-methods`, `instance-variables`, `getters`, `lifecycle`, `instance-methods`, `handlers` and `renderers`
* Main `render` function should be the last function in the file
* Components under `components/consumer/shared` should be named with `base` prefix (i.e. `BaseCheckbox`)

### Styles

The general CSS styles are defined in [style guide](components/shared/scss/_styleguide.scss) file. This file contains:

* Color palette variables (i.e. `$grey-10`, `$red-60`)
* Font families variables (i.e. `$roboto`)
* Font sizes variables (i.e. `$large-font`, `$small-font`)
* Desktop and mobile typography styles (i.e. `.pbg-desktop-heading-1`)

You can use those definitions either for directly styling your components or for creating new specific styles for your component.

## Releasing

In order to make the latest changes available to `varys` you should create a new release.

First, make sure you have the `master` branch in the HEAD commit.

```
$ git checkout master
$ git pull
```

Then, build the project and add the changes in `dist/` folder to the git stage.

```
$ npm run build
$ git add -f dist
```

Then, bump the `version` in the `package.json` file by following [semantic versioning](https://semver.org/) rules. After that, commit and push the changes:

```
$ git commit -a -m "Bump version to X.Y.Z."
$ git push
```

Finally, realse the new version by creating and pushing a new git tag:

```
$ git tag X.Y.Z
$ git push --tags
```

Once the realese is ready, you should update the `aemon` version in the `varys` `package.json`. Follow the instructions in `varys` `README` file.
