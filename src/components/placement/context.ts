import { provide, inject, ref } from 'vue'
import type { PlacementContext } from './interface'

class placementContext {
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
    provide<PlacementContext>(this.placementKey, {
      placementRec: this.placementRec,
    })
  }

  usePlacementContext() {
    const context: placementContext | undefined = inject(this.placementKey)
    if (!context) {
      throw new Error('请先使用placementContext类创建对象中的createPlacementContext')
    }
    return context
  }
}

const placementContextObjectKey = Symbol('placementContextObjectKey')

export function createPlacementContext() {
  const placementContextObject = new placementContext()
  provide(placementContextObjectKey, placementContextObject) // 和下方usePlacementContext的inject配合
  placementContextObject.createPlacementContext()
}

export function usePlacementContext() {
  const placementContextObject: placementContext | undefined = inject(placementContextObjectKey)
  if (!placementContextObject) {
    throw new Error('请在包含 createPlacementContext 方法组件的子组件中使用该函数')
  }
  return placementContextObject.usePlacementContext()
}
