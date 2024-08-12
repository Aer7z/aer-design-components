//Button的事件列表
export interface ButtonSimpleEmits {
  [key: string]: any // 添加索引签名
  click: (ev: MouseEvent) => true
}

//Button的参数列表
export interface ButtonSimpleProps {
  disabled?: boolean
  size?: 'mini' | 'small' | 'medium' | 'large'
  shape?: 'square' | 'circle' | 'round'
  target?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'link' | 'destructive'
}

export const DEFAULT_BUTTON_SIMPLE_PROPS: ButtonSimpleProps = {
  disabled: false,
  size: 'medium',
  shape: 'circle',
  target: '',
  variant: 'primary',
}
