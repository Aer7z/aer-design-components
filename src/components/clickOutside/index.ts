import type { App, ComponentPublicInstance } from 'vue';
import { getComponentsPrefix } from '../_utils/global-config'
import _ClickOutside from './index.vue'


const  ClickOutside = Object.assign( _ClickOutside, {
  // Group:  _ClickOutsideGroup,
  install: (app: App) => {
    app.component(getComponentsPrefix() +  _ClickOutside.name,  _ClickOutside)
    // app.component(getComponentsPrefix() +  _ClickOutsideGroup.name,  _ClickOutsideGroup)
  }
})

export type  ClickOutsideInstance = ComponentPublicInstance<typeof  _ClickOutside>
// export type  _ClickOutsideGroupInstance = ComponentPublicInstance<typeof  _ClickOutsideGroup>

// export {  _ClickOutsideGroup as  ClickOutsideGroup }
export default ClickOutside