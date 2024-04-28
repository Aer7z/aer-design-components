import type { App } from 'vue'
import { getComponentsPrefix } from '../_utils/global-config'
import _Dropdown from './dropdown.vue'

const Dropdown = Object.assign(_Dropdown, {
  install: (app: App) => {
    app.component(getComponentsPrefix() + _Dropdown.name, _Dropdown)
  }
})

export type DropdownType = InstanceType<typeof _Dropdown>

export default Dropdown
