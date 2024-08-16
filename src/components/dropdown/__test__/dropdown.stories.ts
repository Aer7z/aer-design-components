import Dropdown from '../dropdown.vue'
import Preview from './preview.vue'
import type { DropdownProps } from '../interface'

export default {
  title: 'Dropdown', //组件总名称
  component: Dropdown, //用以提供组件的所有相关属性、事件控制
}

const PreviewTemplate: any = (args: DropdownProps) => ({
  components: { Preview },
  setup() {
    return { args }
  },
  template: '<preview v-bind="args" />',
})

export const PreviewInstance = PreviewTemplate.bind({})
PreviewInstance.storyName = '默认预览'
PreviewInstance.args = {}

// const Template = (args: DropdownProps) => ({
//   components: { Dropdown },
//   setup() {
//     return { args }
//   },
//   template: '<Dropdown v-bind="args"></Dropdown>',
// })

// export const Instance = Template.bind({})
// Instance.storyName = '暂定'
// Instance.args = {}
