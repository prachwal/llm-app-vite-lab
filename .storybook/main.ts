import type { StorybookConfig } from '@storybook/preact-vite';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/preact-vite",
    "options": {}
  },
  async viteFinal(config) {
    // Add Tailwind CSS 4 plugin
    if (!config.plugins) {
      config.plugins = [];
    }
    config.plugins.push(tailwindcss());
    return config;
  },
};
export default config;