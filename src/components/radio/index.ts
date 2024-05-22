import type { App, ComponentPublicInstance } from 'vue'
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

export type RadioInstance = ComponentPublicInstance<typeof _Radio>
export type RadioGroupInstance = ComponentPublicInstance<typeof _RadioGroup>

export { _RadioGroup as RadioGroup }
export default Radio
