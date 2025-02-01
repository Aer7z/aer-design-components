import Preview from './preview.vue'
import { Radio } from '@/components/radio/index'
import type { RadioProps } from '@/components/radio/interface'

export default {
  title: 'Radio', //组件总名称
  component: Radio, //用以提供组件的所有相关属性、事件控制
}

const PreviewTemplate: any = (args: RadioProps) => ({
  components: { Preview },
  setup() {
    return { args }
  },
  template: '<preview v-bind="args" />',
})

export const PreviewInstance = PreviewTemplate.bind({})
PreviewInstance.storyName = '默认预览'
PreviewInstance.args = {}

// const Template = (args: RadioProps) => ({
//   components: { Radio },
//   setup() {
//     return { args }
//   },
//   template: '<Radio v-bind="args"></Radio>',
// })

// export const Instance = Template.bind({})
// Instance.storyName = '暂定'
// Instance.args = {}
