'use strict';

const postcssMergeRules = require('postcss-merge-rules');
const autoprefixer = require('autoprefixer');

module.exports = {
  name: require('./package').name,

  options: {
    cssModules : {
      intermediateOutputPath: 'addon/styles/_modules.scss',
      extension: 'module.scss',
      plugins: [
        autoprefixer(['last 2 versions', 'ie 11']),
        postcssMergeRules()
      ]
    }
  },

  isDevelopingAddon: function () {
    return true;
  }
};
