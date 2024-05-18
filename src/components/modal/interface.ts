//Modal的事件列表
export interface ModalEmits {
  [key: string]: any // 添加索引签名
  ok: (ev: MouseEvent) => true
  cancel: (ev: MouseEvent) => true
}

//Modal的事件列表
export interface ModalProps {
  title?: string
  body?: string
}

