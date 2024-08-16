import  Layout from "../layout.vue"
import Preview from "./preview.vue"
import type { LayoutProps } from '../interface'

export default {
  title: 'Layout', //组件总名称
  component: Layout, //用以提供组件的所有相关属性、事件控制
}

const PreviewTemplate: any = (args:LayoutProps) => ({
  components: { Preview },
  setup() {
    return { args };
  },
  template: '<preview v-bind="args" />',
});

export const PreviewInstance = PreviewTemplate.bind({});
PreviewInstance.storyName = "默认预览";
PreviewInstance.args = {};

// const Template = (args: LayoutProps) => ({
//   components: { Layout },
//   setup() {
//     return { args }
//   },
//   template: '<Layout v-bind="args"></Layout>',
// })

// export const Instance = Template.bind({})
// Instance.storyName = '暂定'
// Instance.args = {}