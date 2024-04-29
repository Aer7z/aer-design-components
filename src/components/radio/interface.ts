import type { RadioType } from './constants'
import type { RadioGroupSize, RadioGroupType } from './constants'

export interface RadioEmits {
  [key: string]: any // 添加索引签名
  change: (ev: MouseEvent) => true
}
export interface RadioProps {
  defaultChecked: boolean
  disabled: boolean
  modelValue: string | number | boolean
  type: RadioType
  value: string | number | boolean
}

export interface RadioGroupEmits {
  [key: string]: any // 添加索引签名
  change: (ev: MouseEvent) => true
}
export interface RadioGroupProps {
  defaultChecked: boolean
  direction: boolean
  disabled: boolean
  modelValue: string | number | boolean
  size: RadioGroupSize
  type: RadioGroupType
  value: string | number | boolean
}
