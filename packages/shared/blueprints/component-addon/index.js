'use strict';

const path = require('path');
const stringUtil = require('ember-cli-string-utils');
const getPathOption = require('ember-cli-get-component-path-option');
const normalizeEntityName = require('ember-cli-normalize-entity-name');

module.exports = {
  description: 'Generates a component.',

  fileMapTokens() {
    return {
      // path of the folder, containing the component JS/TS re-export module
      __path__({ podPath, locals, dasherizedModuleName }) {
        return path.join(podPath, locals.path, dasherizedModuleName);
      },
      // name of the component JS/TS re-export module
      __name__() {
        return 'component';
      },
      __template__() {
        return 'template';
      },
      // name of the component JS/TS re-export and HBS re-export
      __root__() {
        return 'app';
      },
    };
  },

  normalizeEntityName(entityName) {
    return normalizeEntityName(entityName);
  },

  locals(options) {
    const { inRepoAddon, inDummy, project, entity } = options;
    const addonRawName = inRepoAddon ? inRepoAddon : project.name();
    const addonName = stringUtil.dasherize(addonRawName);
    const fileName = stringUtil.dasherize(entity.name);
    const importPathName = [addonName, 'components', fileName, 'component'].join('/');
    let templatePath = [addonName, 'components', fileName, 'template'].join('/');

    // if we're in an addon, build import statement
    if (inRepoAddon && !inDummy) {
      templatePath = './template';
    }

    return {
      modulePath: importPathName,
      templatePath,
      path: getPathOption(options),
    };
  },
};
