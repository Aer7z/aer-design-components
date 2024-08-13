// import Modal from '../modal.vue'
import { Modal, ModalTrigger, ModalTriggerPopup, ModalHeader, ModalBody, ModalFooter } from '../index'
import Preview from './preview.vue'
import type { ModalProps } from '../interface'

export default {
  title: 'Modal', //组件总名称
  component: [Modal, ModalTrigger, ModalTriggerPopup, ModalHeader, ModalBody, ModalFooter], //用以提供组件的所有相关属性、事件控制
}

const PreviewTemplate: any = (args: ModalProps) => ({
  components: { Preview },
  setup() {
    return { args }
  },
  template: '<preview v-bind="args" />',
})

export const PreviewInstance = PreviewTemplate.bind({})
PreviewInstance.storyName = '默认预览'
PreviewInstance.args = {}

// const Template = (args: ModalProps) => ({
//   components: { Modal },
//   setup() {
//     return { args }
//   },
//   template: '<Modal v-bind="args"></Modal>',
// })

// export const Instance = Template.bind({})
// Instance.storyName = '暂定'
// Instance.args = {}
