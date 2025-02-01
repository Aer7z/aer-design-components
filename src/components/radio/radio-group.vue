<template>
  <div :class="[clsRadioGroupContainer]" @change="handleChange">
    <slot> </slot>
  </div>
</template>

<script lang="ts" setup>
import { type RadioGroupProps, type RadioGroupEmits } from './interface'
import { getClsPrefix } from '@/components/_utils/global-config'
import { createRadioGroupContext } from './context'

defineOptions({
  name: 'RadioGroup',
})

const props = withDefaults(defineProps<RadioGroupProps>(), {
  direction: 'horizontal',
  disabled: false,
  // modelValue: '',
  name: Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
  size: 'medium',
  type: 'radio',
})
createRadioGroupContext(props)
const emits = defineEmits<RadioGroupEmits>()
const model = defineModel()

const handleChange = (ev: Event) => {
  model.value = (ev.target as HTMLInputElement).value
}

const clsRadioGroupContainer: string[] = [
  `${getClsPrefix()}radio-group-container-${props.direction}`,
  `${getClsPrefix()}radio-group-container`,
]
</script>

<style lang="less" src="./style/index.less"></style>
