import type { App } from 'vue'
import { getComponentsPrefix } from '../_utils/global-config'
import _Dropdown from './dropdown.vue'
import _DropdownTrigger from './dropdown-trigger.vue'
import _DropdownTriggerPopup from './dropdown-trigger-popup.vue'

const Dropdown = Object.assign(_Dropdown, {
  trigger: _DropdownTrigger,
  content: _DropdownTriggerPopup,
  install: (app: App) => {
    app.component(getComponentsPrefix() + _Dropdown.name, _Dropdown)
  }
})

export type DropdownType = typeof _Dropdown
export type DropdownTriggerType = typeof _DropdownTrigger
export type DropdownContentType = typeof _DropdownTriggerPopup

// export type DropdownType = InstanceType<typeof _Dropdown>
// export type DropdownTriggerType = InstanceType<typeof _DropdownTrigger>
// export type DropdownContentType = InstanceType<typeof _DropdownContent>

export { _DropdownTrigger as DropdownTrigger, _DropdownTriggerPopup as DropdownTriggerPopup }
export default Dropdown
