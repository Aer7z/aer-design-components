import type { RadioType } from './constants'
import type { RadioSize, RadioGroupDirection, RadioGroupSize, RadioGroupType } from './constants'

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

export const DEFAULT_RADIO_PROPS: RadioProps = {
  defaultChecked: false,
  disabled: false,
  size: 'medium',
  type: 'radio',
  value: true,
}

export const DEFAULT_RADIO_GROUP_PROPS: RadioGroupProps = {
  direction: 'horizontal',
  disabled: false,
  // modelValue: '',
  size: 'medium',
  type: 'radio',
}
