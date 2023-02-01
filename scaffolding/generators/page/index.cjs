/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists.cjs');

module.exports = {
  description: 'Create a new page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Home',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or screen with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: (data) => {
    const componentTemplate = './page/page.js.hbs'; // eslint-disable-line no-var

    const actions = [
      {
        type: 'add',
        path: '../../src/pages/{{camelCase name}}/index.tsx',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'prettify',
        path: '/pages/',
      }
    ];



    return actions;
  },
};
