<template>
  <div :class="[clsRadioGroupContainer]" @change="handleChange($event)">
    <slot> </slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, provide, onBeforeMount } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import { type RadioGroupProps, type RadioGroupEmits, DEFAULT_RADIO_GROUP_PROPS } from './interface'
import { getClsPrefix } from '../_utils/global-config'
import { createRadioGroupContext } from './context'

defineOptions({
  name: 'RadioGroup',
})

const props = withDefaults(defineProps<RadioGroupProps>(), DEFAULT_RADIO_GROUP_PROPS)
const model = defineModel()

const clsRadioGroupContainer: string[] = [
  `${getClsPrefix()}radio-group-container-${props.direction}`,
  `${getClsPrefix()}radio-group-container`,
]
const emits = defineEmits<RadioGroupEmits>()

const handleChange = (ev: Event) => {
  const element: HTMLInputElement = ev.target as HTMLInputElement
  model.value = element.value
  emits('checkedChange', element?.value)
}

createRadioGroupContext(props)
</script>

<style lang="less" src="./style/index.less"></style>
