// import type { App, ComponentPublicInstance } from 'vue';
// import { getComponentsPrefix } from '../_utils/global-config'
// import _Overlay from './index.vue'


// const  Overlay = Object.assign( _Overlay, {
//   // Group:  _OverlayGroup,
//   install: (app: App) => {
//     app.component(getComponentsPrefix() +  _Overlay.name,  _Overlay)
//     // app.component(getComponentsPrefix() +  _OverlayGroup.name,  _OverlayGroup)
//   }
// })

// export type  OverlayInstance = ComponentPublicInstance<typeof  _Overlay>
// // export type  _OverlayGroupInstance = ComponentPublicInstance<typeof  _OverlayGroup>

// // export {  _OverlayGroup as  OverlayGroup }
// export default Overlay

export {default as Overlay } from './overlay.vue'