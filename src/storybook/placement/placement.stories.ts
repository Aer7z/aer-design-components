import { Placement } from '@/components/placement/index'
import Preview from './preview.vue'
import type { PlacementProps } from '@/components/placement/interface'

export default {
  title: 'Placement', //组件总名称
  component: Placement, //用以提供组件的所有相关属性、事件控制
}

const PreviewTemplate: any = (args: PlacementProps) => ({
  components: { Preview },
  setup() {
    return { args }
  },
  template: '<Preview v-bind="args" />',
})

export const PreviewInstance = PreviewTemplate.bind({})
PreviewInstance.storyName = '默认预览'
PreviewInstance.args = {}

// const Template = (args: PopupPlacementProps) => ({
//   components: { PopupPlacement },
//   setup() {
//     return { args }
//   },
//   template: '<PopupPlacement v-bind="args"></PopupPlacement>',
// })

// export const Instance = Template.bind({})
// Instance.storyName = '暂定'
// Instance.args = {}
