import { error } from 'console'
import { provide, inject } from 'vue'
import type { RadioGroupContext, RadioGroupProps } from './interface'
const radioGroupKey = Symbol('radioGroup')

export function createRadioGroupContext(props: RadioGroupProps) {
  provide<RadioGroupContext>(radioGroupKey, {
    radioGroupDefaultValue: props.defaultValue,
    radioGroupDirection: props.direction,
    radioGroupName: props.name,
    radioGroupSize: props.size,
    radioGroupType: props.type,
  })
}

export function useRadioGroupContext() {
  const context: RadioGroupContext | undefined = inject(radioGroupKey)
  if (!context) {
    throw error('请在外层外radioGroup的组件中使用该函数')
  }
  return context
}
