'use strict';

const path = require('path');
const stringUtil = require('ember-cli-string-utils');
const getPathOption = require('ember-cli-get-component-path-option');
const normalizeEntityName = require('ember-cli-normalize-entity-name');

module.exports = {
  description: 'Generates a component.',

  availableOptions: [
    {
      name: 'path',
      type: String,
      default: 'components',
      aliases: [{ 'no-path': '' }],
    },
  ],

  fileMapTokens() {
    return {
      __name__() {
        return 'component';
      },
      __path__(options) {
        return path.join(options.podPath, options.locals.path, options.dasherizedModuleName);
      },
      __templatepath__(options) {
        return path.join(options.podPath, options.locals.path, options.dasherizedModuleName);
      },
      __templatename__() {
        return 'template';
      },
    };
  },

  className(entityName) {
    const splitName = entityName.split(/\//);
    return splitName.slice(splitName.length - 2, splitName.length).join('-');
  },

  normalizeEntityName(entityName) {
    return normalizeEntityName(
      entityName.replace(/\.js$/, ''), //Prevent generation of ".js.js" files
    );
  },

  locals(options) {
    options.pod = true;
    const claseModuleName = stringUtil.classify(this.className(options.entity.name));
    const stylesModuleName = stringUtil.dasherize(this.className(options.entity.name));

    return {
      stylesModuleName,
      normalizeEntityName,
      claseModuleName,
      path: getPathOption(options),
    };
  },
};
