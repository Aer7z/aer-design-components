// import type { App, ComponentPublicInstance } from 'vue'
// import { getComponentsPrefix } from '../_utils/global-config'
// import _Dropdown from './dropdown.vue'
// import _DropdownTrigger from './dropdown-trigger.vue'
// import _DropdownTriggerPopup from './dropdown-trigger-popup.vue'

// const Dropdown = Object.assign(_Dropdown, {
//   trigger: _DropdownTrigger,
//   triggerPopup: _DropdownTriggerPopup,
//   install: (app: App) => {
//     app.component(getComponentsPrefix() + _Dropdown.name, _Dropdown)
//   }
// })

// export type DropdownType = ComponentPublicInstance<typeof _Dropdown>
// export type DropdownTriggerType = ComponentPublicInstance<typeof _DropdownTrigger>
// export type _DropdownTriggerPopupType = ComponentPublicInstance<typeof _DropdownTriggerPopup>

// export { _DropdownTrigger as DropdownTrigger, _DropdownTriggerPopup as DropdownTriggerPopup }
// export default Dropdown

export { default as Dropdown } from './dropdown.vue'
export { default as DropdownTrigger } from './dropdown-trigger.vue'
export { default as DropdownTriggerPopup } from './dropdown-trigger-popup.vue'
