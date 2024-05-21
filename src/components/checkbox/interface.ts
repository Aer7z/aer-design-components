import type { RadioType } from './constants'
import type { RadioSize, RadioGroupDirection, RadioGroupSize, RadioGroupType } from './constants'
//Checkbox 组件 未修改
export interface RadioEmits {
  [key: string]: any // 添加索引签名
  radioChecked: (value: string | number | boolean) => true
}
export interface RadioProps {
  defaultChecked?: boolean
  disabled?: boolean
  // modelValue?: string | number | boolean
  size?: RadioSize
  type?: RadioType
  value?: string | number | boolean
}

export interface RadioGroupEmits {
  [key: string]: any // 添加索引签名
  checkedChange: (value: string | number | boolean) => true
}
export interface RadioGroupProps {
  defaultValue?: string | number | boolean
  direction?: RadioGroupDirection
  disabled?: boolean
  modelValue?: string | number | boolean
  size?: RadioGroupSize
  type?: RadioGroupType
}
