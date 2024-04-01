import { createRouter, createWebHashHistory } from 'vue-router'
import type { Router } from 'vue-router'
import ButtonShow from '../views/ButtonShow.vue'
import InputShow from '../views/InputShow.vue'
// import { Vue } from 'vue'

// Vue.use(router)
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: ButtonShow },
    { path: '/Button', component: ButtonShow },
    { path: '/Input', component: InputShow }
  ]
})
export default router
