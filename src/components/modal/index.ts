// import type { App, ComponentPublicInstance } from 'vue'
// import { getComponentsPrefix } from '../_utils/global-config'
// import _Modal from './modal.vue'
// import _ModalTrigger from './modal-trigger.vue'
// import _ModalTriggerContent from './modal-trigger-popup.vue'
// import _ModalHeader from './modal-header.vue'
// import _ModalBody from './modal-body.vue'
// import _ModalFooter from './modal-footer.vue'

// const Modal = Object.assign(_Modal, {
//   Trigger: _ModalTrigger,
//   TriggerContent: _ModalTriggerContent,
//   Header: _ModalHeader,
//   Body: _ModalBody,
//   Footer: _ModalFooter,
//   install: (app: App) => {
//     const components = [
//       _Modal,
//       _ModalTrigger,
//       _ModalTriggerContent,
//       _ModalHeader,
//       _ModalBody,
//       _ModalFooter
//     ]
//     components.forEach((component) => {
//       // 在应用中注册组件
//       app.component(getComponentsPrefix() + component.name, component)
//     })
//   }
// })

// export type ModalType = ComponentPublicInstance<typeof _Modal>
// export type ModalTriggerType = ComponentPublicInstance<typeof _ModalTrigger>
// export type ModalTriggerContentType = ComponentPublicInstance<typeof _ModalTriggerContent>
// export type ModalHeaderType = ComponentPublicInstance<typeof _ModalHeader>
// export type ModalBodyType = ComponentPublicInstance<typeof _ModalBody>
// export type ModalFooterType = ComponentPublicInstance<typeof _ModalFooter>

// export {
//   _ModalTrigger as ModalTrigger,
//   _ModalTriggerContent as ModalTriggerContent,
//   _ModalHeader as ModalHeader,
//   _ModalBody as ModalBody,
//   _ModalFooter as ModalFooter
// }

// export default Modal

export { default as Modal } from './modal.vue'
export { default as ModalTrigger } from './modal-trigger.vue'
export { default as ModalTriggerContent } from './modal-trigger-content.vue'
export { default as ModalWrapper } from './modal-wrapper.vue'
export { default as ModalHeader } from './modal-header.vue'
export { default as ModalBody } from './modal-body.vue'
export { default as ModalFooter } from './modal-footer.vue'
