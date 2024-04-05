import type { InputSize, InputStatus, InputType } from './constants'

export interface InputEmits {
  [key: string]: any // 添加索引签名
  blur: (ev: FocusEvent) => true
  change: (value: string, ev: Event) => true
  clear: (ev: MouseEvent) => true
  input: (value: string, ev: Event) => true
  pressEnter: (ev: KeyboardEvent) => true
  focus: (ev: FocusEvent) => true
}

export interface InputProps {
  defaultValue?: string
  disabled?: boolean
  maxLength?: number
  placeholder?: string
  readOnly?: boolean
  showClear?: boolean
  showCount?: boolean
  size?: InputSize
  status?: InputStatus
  type?: InputType
}
