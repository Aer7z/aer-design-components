import type { App } from 'vue'
import _Button from './AerButton.vue'
import _ButtonGroup from './AerButtonGroup.vue'

const Button = Object.assign(_Button, {
  Group: _ButtonGroup,
  install: (app: App) => {
    app.component('Aer' + _Button)
    app.component('Aer' + _ButtonGroup)
  }
})


export type ButtonInstance = InstanceType<typeof _Button>
// export type ButtonGroupInstance = InstanceType<typeof _ButtonGroup>

export { _ButtonGroup as ButtonGroup }
export default Button
