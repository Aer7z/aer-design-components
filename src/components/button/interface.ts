//Button的事件列表
export interface ButtonEmits {
  [key: string]: any // 添加索引签名
  click: (ev: MouseEvent) => true
}

//Button的参数列表
export interface ButtonProps {
  disabled?: boolean
  size?: 'mini' | 'small' | 'medium' | 'large'
  shape?: 'square' | 'circle' | 'round'
  target?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'link' | 'destructive'
}
