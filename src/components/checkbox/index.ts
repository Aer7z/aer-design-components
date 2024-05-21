import type { App, ComponentPublicInstance } from 'vue'
import { getComponentsPrefix } from '../_utils/global-config'
import _Checkbox from './checkbox.vue'

const Checkbox = Object.assign(_Checkbox, {
  install: (app: App) => {
    app.component(getComponentsPrefix() + _Checkbox.name, _Checkbox)
  }
})

export type CheckBoxInstance = ComponentPublicInstance<typeof _Checkbox>

// export { _CheckBox as CheckBox }
export default Checkbox
