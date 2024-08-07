import iconLoading from '../icon-loading.vue'
import Preview from './preview.vue'
// import type { ComponentProps } from '../interface'

export default {
  title: 'icon', //组件总名称
  component: iconLoading, //用以提供组件的所有相关属性、事件控制
}

const PreviewTemplate: any = (args: any) => ({
  components: { Preview },
  setup() {
    return { args }
  },
  template: '<preview v-bind="args" />',
})

export const PreviewInstance = PreviewTemplate.bind({})
PreviewInstance.storyName = '默认预览'
PreviewInstance.args = {}

const Template = (args: any) => ({
  components: { iconLoading },
  setup() {
    return { args }
  },
  template: '<iconLoading v-bind="args"></iconLoading>',
})

export const Instance = Template.bind({})
Instance.storyName = '暂定'
Instance.args = {}
