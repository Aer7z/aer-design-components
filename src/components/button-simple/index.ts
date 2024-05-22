import type { App, ComponentPublicInstance } from 'vue'
import { getComponentsPrefix } from '../_utils/global-config'
import _ButtonSimple from './button.vue'
import _ButtonSimpleGroup from './button-group.vue'
import _ButtonSimpleLoading from './button-loading.vue'

const ButtonSimple = Object.assign(_ButtonSimple, {
  Group: _ButtonSimpleGroup,
  Loading: _ButtonSimpleLoading,
  install: (app: App) => {
    app.component(getComponentsPrefix() + _ButtonSimple.name, _ButtonSimple)
    app.component(getComponentsPrefix() + _ButtonSimpleGroup.name, _ButtonSimpleGroup)
    app.component(getComponentsPrefix() + _ButtonSimpleLoading.name, _ButtonSimpleLoading)
  }
})

export type ButtonInstance = ComponentPublicInstance<typeof _ButtonSimple>
export type ButtonGroupInstance = ComponentPublicInstance<typeof _ButtonSimpleGroup>

export { _ButtonSimpleGroup as ButtonSimpleGroup, _ButtonSimpleLoading as ButtonSimpleLoading }
export default ButtonSimple
