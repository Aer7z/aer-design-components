import type { Router } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import {
  ButtonShow,
  DropdownShow,
  InputShow,
  ModalShow,
  TriggerShow,
  TestShow
} from '../views/index'

const routes = [
  { path: '/', component: ButtonShow },
  { path: '/Button', component: ButtonShow },
  { path: '/Dropdown', component: DropdownShow },
  { path: '/Input', component: InputShow },
  { path: '/Modal', component: ModalShow },
  { path: '/Trigger', component: TriggerShow },
  { path: '/Test', component: TestShow }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
