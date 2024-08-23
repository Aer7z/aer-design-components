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
  trigger?: 'hover' | 'click' | 'focus'
}

export interface TriggerPopupProps {
  teleportToBody?: boolean
}

export interface TriggerPopupContext {
  triggerPopupVisible: Ref<boolean>
}

export const DEFAULT_TRIGGER_PROPS: TriggerProps = {
  disabled: false,
  trigger: 'click',
}

export const DEFAULT_TRIGGER_POPUP_PROPS: TriggerPopupProps = {
  teleportToBody: true,
}
