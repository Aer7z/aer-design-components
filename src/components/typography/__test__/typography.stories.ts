import { Typography, TypographyText } from '../index'
import Preview from './preview.vue'
import type { TypographyProps } from '../interface'

export default {
  title: 'Typography', //组件总名称
  component: Typography, //用以提供组件的所有相关属性、事件控制
}

const PreviewTemplate: any = (args: TypographyProps) => ({
  components: { Preview },
  setup() {
    return { args }
  },
  template: '<Preview v-bind="args" />',
})

export const PreviewInstance = PreviewTemplate.bind({})
PreviewInstance.storyName = '默认预览'
PreviewInstance.args = {}

// const Template = (args: TypographyProps) => ({
//   components: { Typography },
//   setup() {
//     return { args }
//   },
//   template: '<Typography v-bind="args"></Typography>',
// })

// export const Instance = Template.bind({})
// Instance.storyName = '暂定'
// Instance.args = {}
