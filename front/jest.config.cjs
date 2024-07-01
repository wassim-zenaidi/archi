// jest.config.js
module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/default',
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.js$': 'babel-jest',
    },
  };
  