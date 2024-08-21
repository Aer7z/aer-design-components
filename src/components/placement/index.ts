// import type { App, ComponentPublicInstance } from 'vue';
// import { getComponentsPrefix } from '../_utils/global-config'
// mport _PopupPlacement from './index.vue'

// const  PopupPlacement = Object.assign( _PopupPlacement, {
//   // Group:  _PopupPlacementGroup,
//   install: (app: App) => {
//     app.component(getComponentsPrefix() +  _PopupPlacement.name,  _PopupPlacement)
//     // app.component(getComponentsPrefix() +  _PopupPlacementGroup.name,  _PopupPlacementGroup)
//   }
// })

// export type  PopupPlacementInstance = ComponentPublicInstance<typeof  _PopupPlacement>
// // export type  _PopupPlacementGroupInstance = ComponentPublicInstance<typeof  _PopupPlacementGroup>

// // export {  _PopupPlacementGroup as  PopupPlacementGroup }
// export default PopupPlacement

export { default as Placement } from './placement.vue'
export { default as PlacementReference } from './placement-reference.vue'
export { default as PlacementProvider } from './placement-provider.vue'
