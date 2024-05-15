import type { PositionType, TriggerType, PopupPosRec } from './constants'

export interface TriggerEmits {
  [key: string]: any // 添加索引签名
  hide: () => true
  visibleChange: () => true
  show: () => true
}

export interface TriggerProps {
  disabled?: boolean
  position?: PositionType
  trigger?: TriggerType
}

export interface TriggerPopupProps {
  clickOutsideToClose?: boolean
}
