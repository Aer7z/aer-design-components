import type { App } from 'vue'
import { getComponentsPrefix } from '../_utils/global-config'
import _Input from './input.vue'

const Input = Object.assign(_Input, {
  install: (app: App) => {
    app.component(getComponentsPrefix() + _Input.name, _Input)
  }
})

export type InputType = InstanceType<typeof _Input>

export default Input
