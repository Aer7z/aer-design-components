import type { Router } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import {
  ButtonShow,
  ButtonSimpleShow,
  DropdownShow,
  InputShow,
  ModalShow,
  RadioShow,
  TriggerShow,
  TestShow
} from '../views/index'

const routes = [
  { path: '/', component: ButtonShow },
  { path: '/Button', component: ButtonShow },
  { path: '/ButtonSimple', component: ButtonSimpleShow },
  { path: '/Dropdown', component: DropdownShow },
  { path: '/Input', component: InputShow },
  { path: '/Modal', component: ModalShow },
  { path: '/Radio', component: RadioShow },
  { path: '/Trigger', component: TriggerShow },
  { path: '/Test', component: TestShow }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
