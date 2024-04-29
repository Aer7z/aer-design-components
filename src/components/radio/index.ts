import type { App } from 'vue'
import { getComponentsPrefix } from '../_utils/global-config'
import _Radio from './radio.vue'
import _RadioGroup from './radio-group.vue'

const Radio = Object.assign(_Radio, {
  Group: _RadioGroup,
  install: (app: App) => {
    app.component(getComponentsPrefix() + _Radio.name, _Radio)
    app.component(getComponentsPrefix() + _RadioGroup.name, _RadioGroup)
  }
})

export type RadioInstance = InstanceType<typeof _Radio>
// export type RadioGroupInstance = InstanceType<typeof _RadioGroup>

export { _RadioGroup as RadioGroup }
export default Radio
