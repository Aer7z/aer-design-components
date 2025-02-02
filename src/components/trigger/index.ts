// import type { App, ComponentPublicInstance } from 'vue'
// import { getComponentsPrefix } from '../_utils/global-config'
// import _Trigger from './trigger.vue'
// import _TriggerPopup from './trigger-popup.vue'

// // import { initTrigger } from '../dropdown/dropdown.vue'

// const Trigger = Object.assign(_Trigger, {
//   popup: _TriggerPopup,
//   install: (app: App) => {
//     app.component(getComponentsPrefix() + _Trigger.name, _Trigger)
//     // initTrigger()
//   }
// })

// export type TriggerType = ComponentPublicInstance<typeof _Trigger>
// export type TriggerPopupType = ComponentPublicInstance<typeof _TriggerPopup>

// export { _TriggerPopup as TriggerPopup }
// export default Trigger

export { default as Trigger } from './trigger.vue'
export { default as TriggerListen } from './trigger-listen.vue'
export { default as TriggerContent } from './trigger-content.vue'
