import { provide, inject, ref } from 'vue'
import type { TriggerPopupContext } from './interface'

// const triggerPopupKey = Symbol('triggerPopup')

// const triggerPopupVisible = ref(false)

// export function createTriggerContext() {
//   provide<TriggerPopupContext>(triggerPopupKey, {
//     // triggerPopupRec,
//     triggerPopupVisible,
//   })
// }

// export function useTriggerContext() {
//   const context: TriggerPopupContext | undefined = inject(triggerPopupKey)
//   if (!context) {
//     throw new Error('请在包含 createTriggerContext 方法组件的子组件中使用该函数')
//   }
//   return context
// }

export class triggerContext {
  triggerPopupKey: symbol
  triggerPopupVisible: any // 假设 placementRec 的类型为任意类型，你可以根据实际情况调整
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
      throw new Error('请在包含 createTriggerContext 方法组件的子组件中使用该函数')
    }
    return context
  }
}
