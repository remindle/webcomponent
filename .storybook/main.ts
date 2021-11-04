module.exports = {
  // Disabled as we load stories in preview.js so HMR can be configured
  // "stories": [
  //   "../src/**/*.stories.mdx",
  //   "../src/**/*.stories.@(js|jsx|ts|tsx)"
  // ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  // Disabled for now as we need to implement the design-tokens later
  // webpackFinal: async (config) => {
  //   // find web-components rule for extra transpilation
  //   const webComponentsRule = config.module.rules.find(
  //     (rule) => rule.use && rule.use.options && rule.use.options.babelrc === false
  //   );
  //
  //   webComponentsRule.test.push(new RegExp(`node_modules(\\/|\\\\)@remindle(.*)\\.js$`));

  //   return config;
  // },
}