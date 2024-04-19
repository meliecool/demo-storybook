/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  refs: {
    angular: {
      title: 'Angular',
      url: 'http://localhost:6007/',
      expanded: false,
    },
    react: {
      title: 'React/Nextjs',
      url: 'http://localhost:6008/',
      expanded: false,
    },
    vue: {
      title: 'Vuejs',
      url: 'http://localhost:6009/',
      expanded: false,
    },
  },
};
export default config;
