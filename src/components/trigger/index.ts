import type { App } from 'vue'
import { getComponentsPrefix } from '../_utils/global-config'
import _Trigger from './trigger.vue'
import _TriggerPopup from './trigger-popup.vue'

const Trigger = Object.assign(_Trigger, {
  popup: _TriggerPopup,
  install: (app: App) => {
    app.component(getComponentsPrefix() + _Trigger.name, _Trigger)
  }
})

// export type TriggerType = InstanceType<typeof _Trigger>
// export type TriggerPopupType = InstanceType<typeof _TriggerPopup>

export { _TriggerPopup as TriggerPopup }
export default Trigger
