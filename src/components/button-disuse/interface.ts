//Button的事件列表
export interface ButtonEmits {
  [key: string]: any // 添加索引签名
  click: (ev: MouseEvent) => true
}

//Button的参数列表
export interface ButtonProps {
  disabled?: boolean
  loading?: boolean
  size?: 'mini' | 'small' | 'medium' | 'large'
  shape?: 'square' | 'circle' | 'round'
  status?: 'normal' | 'warning' | 'success' | 'danger'
  target?: string
  type?: 'default' | 'primary' | 'dashed' | 'text' | 'link'
}
