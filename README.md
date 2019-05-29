# Aemon

Aemon is a the UI library that empowers our consumer site (`varys`). Before start working on this project, it's important to know and understand our development process:

* [Dev Process](https://docs.google.com/document/d/1uCjFRPyoEttumeFD021zahaptu6-cU4zyLjV6Cx7qfg)
* [Design + Dev Process](https://docs.google.com/document/d/187PdZdjwjTO4n1IQdK8VPZHtYhhjD_KmYb5u88aIO7U)

## Getting Started

### Prerequisites

For development, you will only need Node.js installed on your environment. Please use the appropriate [EditorConfig plugin](https://editorconfig.org/#download) for your editor.

You should be able to run the following command after the installation procedure.

```
$ node --version

$ npm --version
```

### Installing

First, clone this repo if you didn't yet.

```
$ git clone https://github.com/paybygroup.com/aemon.git
```

Then, install all node packages required by this project.

```
$ npm install
```

### Start & watch

The following command should start Storybook server in a random port and open a new browser tab.

```
$ npm run storybook
```

Now you can develop your components and write stories and see the changes in Storybook immediately since it uses Webpack’s hot module reloading.

## Running the tests

To run the whole testing suite:

```
$ npm tests
```

To keep running the tests for a single component, run the following command:

```
$ npx mocha ./test/config/index.js ./test/consumer/desktop/your-component.test.js --watch
```

To verify the test coverge, you can run:

```
$ npm run test:cover
$ open coverage/lcov-report/index.html
```

## Releasing

In order to make the latest changes available to `varys` you should create a new realease.

First, make sure you are that your `master` bran in the HEAD commit.

```
$ git checkout master
$ git pull
```

Then, move to `latest-release` branch and merge it into `master`.

```
$ git checkout latest-release
$ git pull
$ git merge master
```

Then, bump `version` in `package.json` file by following [semantic versioning](https://semver.org/) rules. After that, commit and push the changes:

```
$ git commit -a -m "Bump version to X.Y.Z."
$ git push
```

Finally, realse the new version by creating and pushing a new git tag:

```
$ git tag X.Y.Z
$ git push --tags
```

Once the realese is ready, you should update `aemon` version in `varys` `package.json` file and run:

```
$ npm install
```
