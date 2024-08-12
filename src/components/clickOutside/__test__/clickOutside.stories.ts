import  ClickOutside from "../clickOutside.vue"
import Preview from "./preview.vue"
import type { ClickOutsideProps } from '../interface'

export default {
  title: 'ClickOutside', //组件总名称
  component: ClickOutside, //用以提供组件的所有相关属性、事件控制
}

const PreviewTemplate: any = (args:ClickOutsideProps) => ({
  components: { Preview },
  setup() {
    return { args };
  },
  template: '<preview v-bind="args" />',
});

export const PreviewInstance = PreviewTemplate.bind({});
PreviewInstance.storyName = "默认预览";
PreviewInstance.args = {};

const Template = (args: ClickOutsideProps) => ({
  components: { ClickOutside },
  setup() {
    return { args }
  },
  template: '<ClickOutside v-bind="args"></ClickOutside>',
})

export const Instance = Template.bind({})
Instance.storyName = '暂定'
Instance.args = {}