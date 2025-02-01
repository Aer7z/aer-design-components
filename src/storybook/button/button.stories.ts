import Preview from './preview.vue'
import { Button } from '@/components/button/index'
import type { ButtonProps } from '@/components/button/interface'

export default {
  title: 'Button', //组件总名称
  component: Button, //用以提供组件的所有相关属性、事件控制
}

const PreviewTemplate = (args: ButtonProps) => ({
  components: { Preview },
  setup() {
    return { args }
  },
  template: '<Preview v-bind="args"></Preview>',
})

export const PreviewInstance: any = PreviewTemplate.bind({})
PreviewInstance.storyName = '默认预览'
PreviewInstance.args = {}

const template = (args: ButtonProps) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template:
    '<Button v-bind="args" variant="primary"> primary按钮 </Button><br/><br/>' +
    '<Button v-bind="args" variant="secondary"> secondary按钮 </Button><br/><br/>' +
    '<Button v-bind="args" variant="outline"> outline按钮 </Button><br/><br/>' +
    '<Button v-bind="args" variant="text"> text按钮 </Button><br/><br/>' +
    '<Button v-bind="args" variant="link"> link按钮 </Button><br/><br/>' +
    '<Button v-bind="args" variant="destructive"> destructive按钮 </Button><br/><br/>',
})

export const primaryInstance: any = template.bind({})
primaryInstance.storyName = '按钮列表'
primaryInstance.args = {}
