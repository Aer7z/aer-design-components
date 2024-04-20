import type { Router } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { ButtonShow, InputShow, ModalShow, TriggerShow } from '../views/index'

const routes = [
  { path: '/', component: ButtonShow },
  { path: '/Button', component: ButtonShow },
  { path: '/Input', component: InputShow },
  { path: '/Modal', component: ModalShow },
  { path: '/Trigger', component: TriggerShow }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
