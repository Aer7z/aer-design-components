import type { TriggerPopupPosRec } from '../trigger/interface'
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
  maskClosable?: boolean
}

export interface ModalContext {
  isMaskShow?: boolean
  maskClosable?: boolean
}

export const DEFAULT_MODAL_PROPS: ModalProps = {
  isMaskShow: true,
  maskClosable: false,
}

export interface ModalTriggerPopupPosRec extends TriggerPopupPosRec {}
