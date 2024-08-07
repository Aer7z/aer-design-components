import Trigger from '../trigger.vue'
import Preview from './preview.vue'
import type { TriggerProps } from '../interface'

export default {
  title: 'Trigger', //组件总名称
  component: Trigger, //用以提供组件的所有相关属性、事件控制
}

const PreviewTemplate: any = (args: TriggerProps) => ({
  components: { Preview },
  setup() {
    return { args }
  },
  template: '<div v-bind="args">暂定</div>',
})

export const PreviewInstance = PreviewTemplate.bind({})
PreviewInstance.storyName = '默认预览'
PreviewInstance.args = {}

const Template = (args: TriggerProps) => ({
  components: { Trigger },
  setup() {
    return { args }
  },
  template: '<div v-bind="args">暂定</div>',
})

export const Instance = Template.bind({})
Instance.storyName = '暂定'
Instance.args = {}
