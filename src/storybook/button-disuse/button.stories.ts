import Preview from './preview.vue'
import { ButtonDisuse } from '@/components/button-disuse/index'
import type { ButtonProps } from '@/components/button-disuse/interface'

export default {
  title: 'ButtonDisuse', //组件总名称
  component: ButtonDisuse, //用以提供组件的所有相关属性、事件控制
}

const PreviewTemplate = (args: ButtonProps) => ({
  components: { Preview },
  setup() {
    return { args }
  },
  template: '<Preview v-bind="args"> 按钮 </Preview>',
})

export const PreviewInstance: any = PreviewTemplate.bind({})
PreviewInstance.storyName = '默认预览'
PreviewInstance.args = {}

const Template = (args: ButtonProps) => ({
  components: { ButtonDisuse },
  setup() {
    return { args }
  },
  template:
    '<ButtonDisuse v-bind="args"> 按钮默认状态 </ButtonDisuse><br/><br/>' +
    '<ButtonDisuse v-bind="args" status="normal"> normal状态 </ButtonDisuse><br/><br/>' +
    '<ButtonDisuse v-bind="args" status="success"> success状态 </ButtonDisuse><br/><br/>' +
    '<ButtonDisuse v-bind="args" status="danger"> danger状态 </ButtonDisuse><br/><br/>' +
    '<ButtonDisuse v-bind="args" status="warning"> warning状态 </ButtonDisuse>',
})

export const PrimaryInstance: any = Template.bind({})
PrimaryInstance.storyName = '主要按钮'
PrimaryInstance.args = { type: 'primary' }

export const DefaultInstance: any = Template.bind({})
DefaultInstance.storyName = '默认按钮'
DefaultInstance.args = { type: 'default' }

export const TextInstance: any = Template.bind({})
TextInstance.storyName = '文本按钮'
TextInstance.args = { type: 'text' }

export const DashedInstance: any = Template.bind({})
DashedInstance.storyName = '虚线按钮'
DashedInstance.args = { type: 'dashed' }

export const LinkInstance: any = Template.bind({})
LinkInstance.storyName = '跳转按钮'
LinkInstance.args = { type: 'link' }
