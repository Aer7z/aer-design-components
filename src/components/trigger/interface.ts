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
  position?: 'top' | 'bottom' | 'left' | 'right'
  trigger?: 'hover' | 'click' | 'focus'
}

export interface TriggerPopupProps {
  clickOutsideToClose?: boolean
}

export interface TriggerPopupPosRec {
  top: string
  left: string
  bottom: string
  right: string
}

export interface TriggerPopupContext {
  triggerPopupPosRec: Ref<TriggerPopupPosRec>
  triggerPopupVisible: Ref<boolean>
}

export const DEFAULT_TRIGGER_PROPS: TriggerProps = {
  disabled: false,
  position: 'bottom',
  trigger: 'click',
}

export const DEFAULT_TRIGGER_POPUP_PROPS: TriggerPopupProps = {
  clickOutsideToClose: false,
}
