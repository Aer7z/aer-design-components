<template>
  <label :class="[styleClassRadioWrapper]">
    <input :type="type" :class="[styleClassRadio]" />
    <slot></slot>
  </label>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { RadioProps, RadioEmits } from './interface'
import { getComponentsClassPrefix } from '../_utils/global-config'

defineOptions({
  name: 'Radio'
})

const props = withDefaults(defineProps<RadioProps>(), {
  defaultChecked: false,
  disabled: false,
  modelValue: '',
  type: 'radio',
  value: true
})

// Input组件最外层包裹层的样式
const styleClassRadioWrapper: ComputedRef<string[]> = computed(() => [
  `${getComponentsClassPrefix()}radio-wrapper`
])
// Input组件中的input的样式
const styleClassRadio: ComputedRef<string[]> = computed(() => [
  `${getComponentsClassPrefix()}radio`
])

// const isRadio: ComputedRef<boolean> = computed((): boolean =>
//   props.type === 'radio' ? true : false
// )
// const isButton: ComputedRef<boolean> = computed((): boolean =>
//   props.type === 'button' ? true : false
// )
</script>

<style lang="less" src="./style/index.less"></style>
