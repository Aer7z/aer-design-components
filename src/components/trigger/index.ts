import type { App } from 'vue'
import { getComponentsPrefix } from '../_utils/global-config'
import _Trigger from './trigger.vue'

const Trigger = Object.assign(_Trigger, {
  install: (app: App) => {
    app.component(getComponentsPrefix() + _Trigger.name, _Trigger)
  }
})

export type TriggerType = InstanceType<typeof _Trigger>

export default Trigger
