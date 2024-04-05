import type { Router } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { ButtonShow, DialogShow, InputShow } from '../views/index'

const routes = [
  { path: '/', component: ButtonShow },
  { path: '/Button', component: ButtonShow },
  { path: '/Input', component: InputShow },
  { path: '/Dialog', component: DialogShow }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
