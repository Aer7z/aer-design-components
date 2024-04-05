//Dialog的事件列表
export interface DialogEmits {
  [key: string]: any // 添加索引签名
  opened: (ev: MouseEvent) => true
  closed: (ev: MouseEvent) => true
}

//Dialog的事件列表
export interface DialogProps {
  title?: string
  value?: string
  visible?: boolean
}
