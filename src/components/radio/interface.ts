import type { RadioType } from './constants'
import type { RadioSize, RadioGroupDirection, RadioGroupSize, RadioGroupType } from './constants'

export interface RadioEmits {
  [key: string]: any // 添加索引签名
  change: (ev: MouseEvent) => true
}
export interface RadioProps {
  defaultChecked?: boolean
  disabled?: boolean
  modelValue?: string | number | boolean
  size?: RadioSize
  type?: RadioType
  value?: string | number | boolean
}

export interface RadioGroupEmits {
  [key: string]: any // 添加索引签名
  change: (ev: MouseEvent) => true
}
export interface RadioGroupProps {
  defaultChecked?: boolean
  direction?: RadioGroupDirection
  disabled?: boolean
  modelValue?: string | number | boolean
  size?: RadioGroupSize
  type?: RadioGroupType
  value?: string | number | boolean
}
