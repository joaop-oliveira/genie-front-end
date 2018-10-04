const webpackMerge = require("webpack-merge");
const _ = require('lodash');

const applyPresets = env => {
  const { presets } = env;
  if (_.isEmpty(presets)) {
    return null;
  }
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map(presetName =>
    require(`./presets/webpack.${presetName}`)(env)
  );
  return webpackMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;
