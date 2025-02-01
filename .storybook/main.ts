import type { StorybookConfig } from '@storybook/vue3-webpack5'
const path = require('path')

const config: StorybookConfig = {
  framework: '@storybook/vue3-webpack5',
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  webpackFinal: async config => {
    // 确保 config.module 存在，并且是有效的对象
    if (config.module && Array.isArray(config.module.rules)) {
      config.module.rules.push({
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      })
    }
    if (config.resolve && config.resolve.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'), // 根据你的项目结构调整路径
      }
    }
    // if (config.devServer) {
    //   config.devServer.hot = true
    // }
    return config
  },

  // 如果需要，可以启用 addons
  // addons: [
  //   '@storybook/addon-onboarding',
  //   '@storybook/addon-links',
  //   '@storybook/addon-essentials',
  //   '@chromatic-com/storybook',
  //   '@storybook/addon-interactions',
  // ],
}

export default config
