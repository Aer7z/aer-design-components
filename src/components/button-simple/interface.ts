import type { ButtonSimpleVariant, ButtonSimpleShape, ButtonSimpleSize } from './constants'

//Button的事件列表
export interface ButtonSimpleEmits {
  [key: string]: any // 添加索引签名
  click: (ev: MouseEvent) => true
}

//Button的参数列表
export interface ButtonSimpleProps {
  disabled?: boolean
  size?: ButtonSimpleSize
  shape?: ButtonSimpleShape
  target?: string
  variant?: ButtonSimpleVariant
}

export const DEFAULT_BUTTON_SIMPLE_PROPS: ButtonSimpleProps = {
  disabled: false,
  size: 'medium',
  shape: 'circle',
  target: '',
  variant: 'primary',
}
