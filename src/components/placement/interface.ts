import type { Ref } from 'vue'

//Button的事件列表
export interface PlacementEmits {
  [key: string]: any // 添加索引签名
  // click: (ev: MouseEvent) => true
}

//Button的参数列表
export interface PlacementProps {
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

export interface PlacementRec {
  [key: string]: any // 添加索引签名
  top: string
  left: string
  bottom: string
  right: string
}

export interface PlacementContext {
  placementRec: Ref<PlacementRec>
}

