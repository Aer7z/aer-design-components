<template>
  <div :class="[clsRadioGroupContainer]" @change="handleChange">
    <slot> </slot>
  </div>
</template>

<script lang="ts" setup>
import { type RadioGroupProps, type RadioGroupEmits, DEFAULT_RADIO_GROUP_PROPS } from './interface'
import { getClsPrefix } from '../_utils/global-config'
import { createRadioGroupContext } from './context'

defineOptions({
  name: 'RadioGroup',
})

const props = withDefaults(defineProps<RadioGroupProps>(), DEFAULT_RADIO_GROUP_PROPS)
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
