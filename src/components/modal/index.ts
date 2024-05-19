import type { App } from 'vue'
import { getComponentsPrefix } from '../_utils/global-config'
import _Modal from './modal.vue'
import _ModalTrigger from './modal-trigger.vue'
import _ModalTriggerPopup from './modal-trigger-popup.vue'
import _ModalHeader from './modal-header.vue'
import _ModalBody from './modal-body.vue'
import _ModalFooter from './modal-footer.vue'

const Modal = Object.assign(_Modal, {
  Trigger: _ModalTrigger,
  TriggerPopup: _ModalTriggerPopup,
  Header: _ModalHeader,
  Body: _ModalBody,
  Footer: _ModalFooter,
  install: (app: App) => {
    app.component(getComponentsPrefix() + _Modal.name, _Modal)
  }
})

export type ModalType = InstanceType<typeof _Modal>
export type ModalTriggerType = InstanceType<typeof _ModalTrigger>
export type ModalTriggerPopupType = InstanceType<typeof _ModalTriggerPopup>
export type ModalHeaderType = InstanceType<typeof _ModalHeader>
export type ModalBodyType = InstanceType<typeof _ModalBody>
export type ModalFooterType = InstanceType<typeof _ModalFooter>

export {
  _ModalTrigger as ModalTrigger,
  _ModalTriggerPopup as ModalTriggerPopup,
  _ModalHeader as ModalHeader,
  _ModalBody as ModalBody,
  _ModalFooter as ModalFooter
}

export default Modal
