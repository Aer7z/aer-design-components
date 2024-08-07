import Preview from './preview.vue'
import Checkbox from '../index'
// import type { CheckboxProps } from '../interface'

export default {
  title: 'Checkbox', //组件总名称
  component: Checkbox, //用以提供组件的所有相关属性、事件控制
}

const PreviewTemplate = (args: any) => ({
  components: { Preview },
  setup() {
    return { args }
  },
  template: '<Preview v-bind="args"></Preview>',
})

export const PreviewInstance: any = PreviewTemplate.bind({})
PreviewInstance.storyName = '默认状态'
PreviewInstance.args = {}

// const template = (args: CheckboxProps) => ({
//   components: { Checkbox },
//   setup() {
//     return { args }
//   },
//   template: '<Checkbox v-bind="args"> 勾选框 </Checkbox>',
// })

// export const primaryInstance = template.bind({})
// primaryInstance.storyName = '主要按钮'
// primaryInstance.args = { type: 'primary' }
