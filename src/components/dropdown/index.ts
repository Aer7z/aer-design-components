// import type { App, ComponentPublicInstance } from 'vue'
// import { getComponentsPrefix } from '../_utils/global-config'
// import _Dropdown from './dropdown.vue'
// import _DropdownTrigger from './dropdown-trigger.vue'
// import _DropdownTriggerContent from './dropdown-trigger-popup.vue'

// const Dropdown = Object.assign(_Dropdown, {
//   trigger: _DropdownTrigger,
//   TriggerContent: _DropdownTriggerContent,
//   install: (app: App) => {
//     app.component(getComponentsPrefix() + _Dropdown.name, _Dropdown)
//   }
// })

// export type DropdownType = ComponentPublicInstance<typeof _Dropdown>
// export type DropdownTriggerType = ComponentPublicInstance<typeof _DropdownTrigger>
// export type _DropdownTriggerContentType = ComponentPublicInstance<typeof _DropdownTriggerContent>

// export { _DropdownTrigger as DropdownTrigger, _DropdownTriggerContent as DropdownTriggerContent }
// export default Dropdown

export { default as Dropdown } from './dropdown.vue'
export { default as DropdownTrigger } from './dropdown-trigger.vue'
export { default as DropdownTriggerContent } from './dropdown-trigger-content.vue'
