import type { TriggerPopupProps } from '../trigger/interface'
//Modal的事件列表
export interface ModalEmits {
  [key: string]: any // 添加索引签名
  cancel: (ev: MouseEvent) => true
  closed: (ev: MouseEvent) => true
  ok: (ev: MouseEvent) => true
  opened: (ev: MouseEvent) => true
}

//Modal的事件列表
export interface ModalProps {
  isMaskShow?: boolean
}

export interface ModalContext {
  isMaskShow?: boolean
}

export interface ModalTriggerPopupPosRec extends TriggerPopupProps {}
