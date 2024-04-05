import type { App } from 'vue'
import { getComponentsPrefix } from '../_utils/global-config'
import _Dialog from './dialog.vue'

const Dialog = Object.assign(_Dialog, {
  install: (app: App) => {
    app.component(getComponentsPrefix() + _Dialog.name, _Dialog)
  }
})

export type DialogType = InstanceType<typeof _Dialog>

export default Dialog
