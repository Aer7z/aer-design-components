import { error } from 'console'
import { provide, inject } from 'vue'
const radioGroup = Symbol('radioGroup')

export function createContext() {
  provide(radioGroup, {})
}

export function useContext() {
  const context = inject(radioGroup)
  if (!context) {
    throw error('请在radio中使用该函数')
  }
  return context
}
