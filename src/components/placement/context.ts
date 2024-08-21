import { provide, inject, ref } from 'vue'
import type { PlacementContext } from './interface'

const placementKey = Symbol('placementKey')

const placementRec = ref({
  top: '',
  left: '',
  bottom: '',
  right: '',
})

export function createPlacementContext() {
  provide<PlacementContext>(placementKey, {
    placementRec,
  })
}

export function usePlacementContext() {
  const context: PlacementContext | undefined = inject(placementKey)
  if (!context) {
    throw new Error('请在包含 createPlacementContext 方法组件的子组件中使用该函数')
  }
  return context
}
