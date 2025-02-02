import type { Ref } from 'vue'

//Button的事件列表
export interface PlacementEmits {
  [key: string]: any // 添加索引签名
  // click: (ev: MouseEvent) => true
}

//Button的参数列表
export interface PlacementProps {
  placement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom'
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
