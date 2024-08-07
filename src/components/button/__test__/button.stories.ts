import Preview from './preview.vue'
import Button from '../index'
import type { ButtonProps } from '../interface'

export default {
  title: 'Button', //组件总名称
  component: Button, //用以提供组件的所有相关属性、事件控制
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
  components: { Button },
  setup() {
    return { args }
  },
  template:
    '<Button v-bind="args"> 按钮默认状态 </Button><br/><br/>' +
    '<Button v-bind="args" status="normal"> normal状态 </Button><br/><br/>' +
    '<Button v-bind="args" status="success"> success状态 </Button><br/><br/>' +
    '<Button v-bind="args" status="danger"> danger状态 </Button><br/><br/>' +
    '<Button v-bind="args" status="warning"> warning状态 </Button>',
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
