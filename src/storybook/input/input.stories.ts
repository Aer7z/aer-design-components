import { Input } from '@/components/input/index'
import Preview from './preview.vue'
import type { InputProps } from '@/components/input/interface'

export default {
  title: 'Input', //组件总名称
  component: Input, //用以提供组件的所有相关属性、事件控制
}

const PreviewTemplate: any = (args: InputProps) => ({
  components: { Preview },
  setup() {
    return { args }
  },
  template: '<preview v-bind="args" />',
})

export const PreviewInstance = PreviewTemplate.bind({})
PreviewInstance.storyName = '默认预览'
PreviewInstance.args = {}

// const Template = (args: InputProps) => ({
//   components: { Input },
//   setup() {
//     return { args }
//   },
//   template: '<Input v-bind="args"></Input>',
// })

// export const Instance = Template.bind({})
// Instance.storyName = '暂定'
// Instance.args = {}
