import type { Ref } from 'vue'
// import type { PositionType, TriggerType, PopupPosRec } from './constants'

export interface TriggerEmits {
  [key: string]: any // 添加索引签名
  hide: () => true
  visibleChange: () => true
  show: () => true
}

export interface TriggerProps {
  disabled?: boolean
  triggerMode?: 'hover' | 'click' | 'focus'
}

export interface TriggerContentProps {
  teleportToBody?: boolean
}

export interface TriggerContentContext {
  triggerContentVisible: Ref<boolean>
}
