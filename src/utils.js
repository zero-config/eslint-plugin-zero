const baseConfig = require('./base');

const { isArray } = Array;

const isObject = x => !Array.isArray(x) && (x !== null) && (typeof x === 'object');

const isNil = x => x == null;

const mergeBase = config => Object.keys(baseConfig).reduce((acc, key) => {
  let newValue;
  if (config[key]) {
    if (isArray(config[key]) && isArray(baseConfig[key])) {
      newValue = [...baseConfig[key], ...config[key]];
    } else if (isObject(config[key]) && isObject(baseConfig)) {
      newValue = {
        ...baseConfig[key], ...config[key],
      };
    } else if (isNil(config[key])) {
      newValue = baseConfig[key];
    } else {
      newValue = config[key];
    }
  }
  return {
    ...acc,
    [key]: newValue,
  };
}, { ...baseConfig });

module.exports = {
  isArray,
  isObject,
  isNil,
  mergeBase,
};
