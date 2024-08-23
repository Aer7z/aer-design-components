// import Trigger from '../trigger.vue'
import Preview from './preview.vue'
import type { TriggerProps } from '../interface'
import { Trigger, TriggerPopup, TriggerProvider } from '../index'

export default {
  title: 'Trigger', //组件总名称
  components: { Trigger, TriggerPopup, TriggerProvider }, //用以提供组件的所有相关属性、事件控制
}

const PreviewTemplate: any = (args: TriggerProps) => ({
  components: { Preview },
  setup() {
    return { args }
  },
  template: '<Preview v-bind="args"></Preview>',
})

export const PreviewInstance = PreviewTemplate.bind({})
PreviewInstance.storyName = '默认预览'
PreviewInstance.args = {}
