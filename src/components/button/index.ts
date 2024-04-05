import type { App } from 'vue'
import { getComponentsPrefix } from '../_utils/global-config'
import _Button from './button.vue'
import _ButtonGroup from './button-group.vue'

const Button = Object.assign(_Button, {
  Group: _ButtonGroup,
  install: (app: App) => {
    app.component(getComponentsPrefix() + _Button.name, _Button)
    app.component(getComponentsPrefix() + _ButtonGroup.name, _ButtonGroup)
  }
})

export type ButtonInstance = InstanceType<typeof _Button>
// export type ButtonGroupInstance = InstanceType<typeof _ButtonGroup>

export { _ButtonGroup as ButtonGroup }
export default Button
