import { provide, inject, ref } from 'vue'
import type { TriggerPopupContext } from './interface'

class triggerContext {
  triggerPopupKey: symbol
  triggerPopupVisible: any // 假设 triggerPopupVisible 的类型为任意类型，你可以根据实际情况调整
  constructor() {
    this.triggerPopupKey = Symbol('triggerPopup')
    this.triggerPopupVisible = ref(false)
  }

  createTriggerContext() {
    provide<TriggerPopupContext>(this.triggerPopupKey, {
      triggerPopupVisible: this.triggerPopupVisible,
    })
  }

  useTriggerContext() {
    const context: TriggerPopupContext | undefined = inject(this.triggerPopupKey)
    if (!context) {
      throw new Error('请先使用triggerContext类创建对象中的createTriggerContext')
    }
    return context
  }
}

const triggerContextObjectKey = Symbol('triggerContextObjectKey')

export function createTriggerContext() {
  const triggerContextObject = new triggerContext()
  provide(triggerContextObjectKey, triggerContextObject) // 和下方useTriggerContext的inject配合
  triggerContextObject.createTriggerContext()
}

export function useTriggerContext() {
  const triggerContextObject: triggerContext | undefined = inject(triggerContextObjectKey)
  if (!triggerContextObject) {
    throw new Error('请在包含 createTriggerContext 方法组件的子组件中使用该函数')
  }
  return triggerContextObject.useTriggerContext()
}
