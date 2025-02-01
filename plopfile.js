export default function (plop) {
  plop.setGenerator('controller', {
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: '请输入组件的名称',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/storybook/{{componentName}}/preview.vue',
        templateFile: './.storybook/templates/storybook-preview-vue.hbs',
      },
      {
        type: 'add',
        path: 'src/storybook/{{componentName}}/{{componentName}}.stories.ts',
        templateFile: './.storybook/templates/storybook-story-ts.hbs',
      },
      {
        type: 'add',
        path: 'src/storybook/{{componentName}}/{{componentName}}.test.ts',
        templateFile: './.storybook/templates/storybook-test-ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/{{componentName}}.vue',
        templateFile: './.storybook/templates/component-vue.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/constants.ts',
        templateFile: './.storybook/templates/constants-ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/index.ts',
        templateFile: './.storybook/templates/index-ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/interface.ts',
        templateFile: './.storybook/templates/interface-ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/README.md',
        templateFile: './.storybook/templates/README-md.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/style/{{componentName}}.less',
        templateFile: './.storybook/templates/style-component-less.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/style/index.less',
        templateFile: './.storybook/templates/style-index-less.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/style/index.ts',
        templateFile: './.storybook/templates/style-index-ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/style/token.less',
        templateFile: './.storybook/templates/style-token-less.hbs',
      },
    ],
  })
}
