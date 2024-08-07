import Preview from './preview.vue'
import ButtonSimple from '../index'
import type { ButtonSimpleProps } from '../interface'

export default {
  title: 'ButtonSimple', //组件总名称
  component: ButtonSimple, //用以提供组件的所有相关属性、事件控制
}

const PreviewTemplate = (args: ButtonSimpleProps) => ({
  components: { Preview },
  setup() {
    return { args }
  },
  template: '<Preview v-bind="args"></Preview>',
})

export const PreviewInstance: any = PreviewTemplate.bind({})
PreviewInstance.storyName = '默认预览'
PreviewInstance.args = {}

const template = (args: ButtonSimpleProps) => ({
  components: { ButtonSimple },
  setup() {
    return { args }
  },
  template:
    '<ButtonSimple v-bind="args" variant="primary"> primary按钮 </ButtonSimple><br/><br/>' +
    '<ButtonSimple v-bind="args" variant="secondary"> secondary按钮 </ButtonSimple><br/><br/>' +
    '<ButtonSimple v-bind="args" variant="outline"> outline按钮 </ButtonSimple><br/><br/>' +
    '<ButtonSimple v-bind="args" variant="text"> text按钮 </ButtonSimple><br/><br/>' +
    '<ButtonSimple v-bind="args" variant="link"> link按钮 </ButtonSimple><br/><br/>' +
    '<ButtonSimple v-bind="args" variant="destructive"> destructive按钮 </ButtonSimple><br/><br/>',
})

export const primaryInstance: any = template.bind({})
primaryInstance.storyName = '按钮列表'
primaryInstance.args = {}
