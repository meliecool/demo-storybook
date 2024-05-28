/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  docs: {},
  refs: {
    angular: {
      title: 'Angular',
      url: 'http://localhost:6007/',
    },
    react: {
      title: 'React/Nextjs',
      url: 'http://localhost:6008/',
    },
    vue: {
      title: 'Vuejs',
      url: 'http://localhost:6009/',
    },
  },
};
export default config;
