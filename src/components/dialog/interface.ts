//Dialog的事件列表
export interface DialogEmits {
  [key: string]: any // 添加索引签名
  ok: (ev: MouseEvent) => true
  cancel: (ev: MouseEvent) => true
}

//Dialog的事件列表
export interface DialogProps {
  title?: string
  body?: string
}
