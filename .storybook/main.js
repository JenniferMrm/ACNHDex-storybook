const path = require("path");

module.exports = {
  stories: [
    "../ui/components/**/*.stories.mdx",
    "../ui/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../ui/segments/**/*.stories.mdx",
    "../ui/segments/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@ui": path.resolve(__dirname, "../ui"),
    };
    return config;
  },
  framework: "@storybook/vue",
};
