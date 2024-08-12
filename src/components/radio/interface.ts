export interface RadioEmits {
  [key: string]: any // 添加索引签名
  radioChecked: (value: string | number | boolean) => true
}
export interface RadioProps {
  defaultChecked?: boolean
  disabled?: boolean
  // modelValue?: string | number | boolean
  size?: 'mini' | 'small' | 'medium' | 'large'
  type?: 'button' | 'radio'
  value?: string
}

export interface RadioGroupEmits {
  [key: string]: any // 添加索引签名
  checkedChange: (value: string | number | boolean) => true
}
export interface RadioGroupProps {
  defaultValue?: string
  direction?: 'horizontal' | 'vertical'
  disabled?: boolean
  modelValue?: string | number | boolean
  name?: string
  size?: 'mini' | 'small' | 'medium' | 'large'
  type?: 'button' | 'radio'
}

export interface RadioGroupContext {
  radioGroupDefaultValue?: string
  radioGroupDirection?: 'horizontal' | 'vertical'
  radioGroupName?: string
  radioGroupSize?: 'mini' | 'small' | 'medium' | 'large'
  radioGroupType?: 'button' | 'radio'
}

export const DEFAULT_RADIO_PROPS: RadioProps = {
  defaultChecked: false,
  disabled: false,
  size: 'medium',
  type: 'radio',
}

export const DEFAULT_RADIO_GROUP_PROPS: RadioGroupProps = {
  direction: 'horizontal',
  disabled: false,
  // modelValue: '',
  name: Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
  size: 'medium',
  type: 'radio',
}
