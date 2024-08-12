import type { ButtonType, ButtonShape, ButtonStatus, ButtonSize } from './constants'

//Button的事件列表
export interface ButtonEmits {
  [key: string]: any // 添加索引签名
  click: (ev: MouseEvent) => true
}

//Button的参数列表
export interface ButtonProps {
  disabled?: boolean
  loading?: boolean
  size?: ButtonSize
  shape?: ButtonShape
  status?: ButtonStatus
  target?: string
  type?: ButtonType
}

export const DEFAULT_BUTTON_PROPS: ButtonProps = {
  disabled: false,
  loading: false,
  size: 'medium',
  shape: 'square',
  status: 'normal',
  target: '',
  type: 'default',
}
