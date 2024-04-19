import type { App } from 'vue'
import { getComponentsPrefix } from '../_utils/global-config'
import _Modal from './modal.vue'

const Modal = Object.assign(_Modal, {
  install: (app: App) => {
    app.component(getComponentsPrefix() + _Modal.name, _Modal)
  }
})

export type ModalType = InstanceType<typeof _Modal>

export default Modal
