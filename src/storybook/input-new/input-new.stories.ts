import { InputNew }  from "@/components/input-new/index"
import Preview from "./preview.vue"
import type { InputNewProps } from "@/components/input-new/interface"

export default {
  title: 'InputNew', //组件总名称
  component: InputNew, //用以提供组件的所有相关属性、事件控制
}

const PreviewTemplate: any = (args:InputNewProps) => ({
  components: { Preview },
  setup() {
    return { args };
  },
  template: '<Preview v-bind="args" />',
});

export const PreviewInstance = PreviewTemplate.bind({});
PreviewInstance.storyName = "默认预览";
PreviewInstance.args = {};

// const Template = (args: InputNewProps) => ({
//   components: { InputNew },
//   setup() {
//     return { args }
//   },
//   template: '<InputNew v-bind="args"></InputNew>',
// })

// export const Instance = Template.bind({})
// Instance.storyName = '暂定'
// Instance.args = {}