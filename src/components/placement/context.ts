import { provide, inject, ref } from 'vue'

export class placementContext {
  placementKey: symbol
  placementRec: any // 假设 placementRec 的类型为任意类型，你可以根据实际情况调整
  constructor() {
    this.placementKey = Symbol('placementKey')
    this.placementRec = ref({
      top: '',
      left: '',
      bottom: '',
      right: '',
    })
  }

  createPlacementContext() {
    provide(this.placementKey, {
      placementRec: this.placementRec,
    })
  }

  usePlacementContext() {
    const context = inject(this.placementKey)
    if (!context) {
      throw new Error('请在包含 createPlacementContext 方法组件的子组件中使用该函数')
    }
    return context
  }
}

// const placementContextObjectKey = Symbol('placementContextObjectKey')
// export function providePlacementContextObject(placementContextObject: any) {
//   provide(placementContextObjectKey, {
//     placementContextObject,
//   })
// }

// export function getPlacementContextObject() {
//   const context = inject(placementContextObjectKey)
//   if (!context) {
//     throw new Error('请在包含 providePlacementContextObject 方法组件的子组件中使用该函数')
//   }
//   return context
// }

// const placementKey = Symbol('placementKey')

// const placementRec = ref({
//   top: '',
//   left: '',
//   bottom: '',
//   right: '',
// })

// export function createPlacementContext() {
//   provide<PlacementContext>(placementKey, {
//     placementRec,
//   })
// }

// export function usePlacementContext() {
//   const context: PlacementContext | undefined = inject(placementKey)
//   if (!context) {
//     throw new Error('请在包含 createPlacementContext 方法组件的子组件中使用该函数')
//   }
//   return context
// }
