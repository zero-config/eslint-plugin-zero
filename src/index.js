const baseConfig = require('./base');
const reactConfig = require('./react');
const tsConfig = require('./ts');
const { mergeBase } = require('./utils');

module.exports = {
  configs: {
    base: baseConfig,
    react: mergeBase(reactConfig),
    ts: mergeBase(tsConfig),
  },
};
