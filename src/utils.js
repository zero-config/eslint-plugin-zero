const { isArray } = Array;

const isObject = x => !Array.isArray(x) && (x !== null) && (typeof x === 'object');

const isNil = x => x == null;

const mergeConfig = (baseConfig, config) => Object.keys({ ...baseConfig, ...config })
  .reduce((acc, key) => {
    let newValue;

    if (isArray(config[key]) && isArray(baseConfig[key])) {
      newValue = [...baseConfig[key], ...config[key]];
    } else if (isObject(config[key]) && isObject(baseConfig[key])) {
      newValue = {
        ...baseConfig[key], ...config[key],
      };
    } else if (isNil(config[key])) {
      newValue = baseConfig[key];
    } else {
      newValue = config[key];
    }

    return {
      ...acc,
      [key]: newValue,
    };
  }, {});

const mergeConfigs = (...configs) => {
  if (configs.length <= 1) {
    return configs[0];
  }
  return configs.reduce((baseConfig, config) => mergeConfig(baseConfig, config));
};

module.exports = {
  isArray,
  isObject,
  isNil,
  mergeConfig,
  mergeConfigs,
};
