import type { CheckboxGroupDirection } from './constants'
//Checkbox 组件

export interface CheckboxEmits {
  [key: string]: any // 添加索引签名
  CheckboxChecked: (value: string | number | boolean) => true
}
export interface CheckboxProps {
  defaultChecked?: boolean
  disabled?: boolean
  modelValue?: string | number | boolean
  value?: string | number | boolean
}

export interface CheckboxGroupEmits {
  [key: string]: any // 添加索引签名
  checkedChange: (value: string | number | boolean) => true
}

export interface CheckboxGroupProps {
  defaultValue?: string | number | boolean
  direction?: CheckboxGroupDirection
  disabled?: boolean
  modelValue?: string | number | boolean
}
