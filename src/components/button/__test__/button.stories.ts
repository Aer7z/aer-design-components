import Preview_ from './preview.vue'
import Button_ from '../index'

export default {
  title: 'Button', //组件总名称
  component: Button_, //用以提供组件的所有相关属性、事件控制
}

const PreviewTamplate = (args: any) => ({
  components: { Preview_ },
  setup() {
    return { args }
  },
  template: '<Preview_ v-bind="args"> 我是default按钮 </Preview_>',
})

export const PreviewInstance = PreviewTamplate.bind({})
PreviewInstance.storyName = '预览'
PreviewInstance.args = {}
