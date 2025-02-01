import type {} from './constants'

//Button的事件列表
export interface InputNewEmits {
  [key: string]: any // 添加索引签名
  // click: (ev: MouseEvent) => true
  focus: (ev: FocusEvent) => true
  blur: (ev: FocusEvent) => true
  input: (value: string, ev: Event) => true
  change: (value: string, ev: Event) => true
  clear: (ev: MouseEvent) => true
  pressEnter: (ev: KeyboardEvent) => true
}

//Button的参数列表
export interface InputNewProps {
  disabled?: boolean
  placeholder?: string
  showClear?: boolean
  size?: 'mini' | 'small' | 'medium' | 'large'
  variant?: 'email' | 'number' | 'password' | 'text'
}

export interface InputNewContext {}

// export const DEFAULT_InputNew_PROPS: InputNewProps = {
// }

// import type { InputSize, InputStatus, InputType } from './constants'
