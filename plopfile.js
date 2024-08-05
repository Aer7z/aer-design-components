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
        path: 'src/components/{{componentName}}/__test__/{{componentName}}stories.ts',
        templateFile: './.storybook/templates/test-story.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/__test__/{{componentName}}test.ts',
        templateFile: './.storybook/templates/test.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/__test__/preview.vue',
        templateFile: './.storybook/templates/test-preview.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/{{componentName}}.vue',
        templateFile: './.storybook/templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/index.ts',
        templateFile: './.storybook/templates/index-ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/README.md',
        templateFile: './.storybook/templates/README.hbs',
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
        path: 'src/components/{{componentName}}/style/token.less',
        templateFile: './.storybook/templates/style-token-less.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/style/index.ts',
        templateFile: './.storybook/templates/style-index-less-ts.hbs',
      },
    ],
  })
}
