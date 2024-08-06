import Preview from './preview.vue'
import ButtonSimple from '../index'
import type { ButtonSimpleProps } from '../interface'

export default {
  title: 'ButtonSimple', //组件总名称
  component: ButtonSimple, //用以提供组件的所有相关属性、事件控制
}

// const Previewtemplate = (args: ButtonProps) => ({
//   components: { Preview },
//   setup() {
//     return { args }
//   },
//   template: '<Preview v-bind="args"> 按钮 </Preview>',
// })

// export const PreviewInstance = Previewtemplate.bind({})
// PreviewInstance.storyName = '默认状态'
// PreviewInstance.args = {}

const template = (args: ButtonSimpleProps) => ({
  components: { ButtonSimple },
  setup() {
    return { args }
  },
  template: '<ButtonSimple v-bind="args"> 按钮 </ButtonSimple>',
})

export const primaryInstance = template.bind({})
primaryInstance.storyName = '主要按钮'
primaryInstance.args = { type: 'primary' }