// import type { App, ComponentPublicInstance } from 'vue';
// import { getComponentsPrefix } from '../_utils/global-config'
// import _Layout from './index.vue'

// const  Layout = Object.assign( _Layout, {
//   // Group:  _LayoutGroup,
//   install: (app: App) => {
//     app.component(getComponentsPrefix() +  _Layout.name,  _Layout)
//     // app.component(getComponentsPrefix() +  _LayoutGroup.name,  _LayoutGroup)
//   }
// })

// export type  LayoutInstance = ComponentPublicInstance<typeof  _Layout>
// // export type  _LayoutGroupInstance = ComponentPublicInstance<typeof  _LayoutGroup>

// // export {  _LayoutGroup as  LayoutGroup }
// export default Layout

export { default as Layout } from './layout.vue'
export { default as LayoutHeader } from './layout-header.vue'
export { default as LayoutContent } from './layout-content.vue'
export { default as LayoutSidebar } from './layout-sidebar.vue'
export { default as LayoutFooter } from './layout-footer.vue'
