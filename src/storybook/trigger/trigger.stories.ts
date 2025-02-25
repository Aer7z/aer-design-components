// import Trigger from '../trigger.vue'
import Preview from './preview.vue'
import type { TriggerProps } from '@/components/trigger/interface'
import { Trigger, TriggerListen, TriggerContent } from '@/components/trigger/index'

export default {
  title: 'Trigger', //组件总名称
  components: { Trigger, TriggerListen, TriggerContent }, //用以提供组件的所有相关属性、事件控制
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
