export interface TriggerEmits {
  [key: string]: any // 添加索引签名
  hide: () => true
  visibleChange: () => true
  show: () => true
}

export interface TriggerProps {
  clickOutsideToClose?: boolean
  disabled?: boolean
  position?: string
  trigger?: string
}
