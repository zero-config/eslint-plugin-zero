const baseConfig = require('./base');
const reactConfig = require('./react');
const tsConfig = require('./ts');
const { mergeConfig, mergeConfigs } = require('./utils');

module.exports = {
  configs: {
    base: baseConfig,
    react: mergeConfig(baseConfig, reactConfig),
    ts: mergeConfig(baseConfig, tsConfig),
    'ts-react': mergeConfigs(baseConfig, tsConfig, reactConfig),
  },
};
