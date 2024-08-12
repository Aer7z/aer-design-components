import { provide, inject, ref } from 'vue'
import type { TriggerPopupContext } from './interface'

const triggerPopupKey = Symbol('triggerPopup')

const triggerPopupPosRec = ref({
  top: '',
  left: '',
  bottom: '',
  right: '',
})
const triggerPopupVisible = ref(false)

export function createTriggerContext() {
  provide<TriggerPopupContext>(triggerPopupKey, {
    triggerPopupPosRec,
    triggerPopupVisible,
  })
}

export function useTriggerContext() {
  const context: TriggerPopupContext | undefined = inject(triggerPopupKey)
  if (!context) {
    throw new Error('请在包含 createTriggerContext 方法组件的子组件中使用该函数')
  }
  return context
}
