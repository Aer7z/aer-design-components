import  Overlay from "../overlay.vue"
import Preview from "./preview.vue"
import type { OverlayProps } from '../interface'

export default {
  title: 'Overlay', //组件总名称
  component: Overlay, //用以提供组件的所有相关属性、事件控制
}

const PreviewTemplate: any = (args:OverlayProps) => ({
  components: { Preview },
  setup() {
    return { args };
  },
  template: '<preview v-bind="args" />',
});

export const PreviewInstance = PreviewTemplate.bind({});
PreviewInstance.storyName = "默认预览";
PreviewInstance.args = {};

// const Template = (args: OverlayProps) => ({
//   components: { Overlay },
//   setup() {
//     return { args }
//   },
//   template: '<Overlay v-bind="args"></Overlay>',
// })

// export const Instance = Template.bind({})
// Instance.storyName = '暂定'
// Instance.args = {}