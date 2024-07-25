<template>
  <!-- <input type="checkbox" v-model="checked" @change="handleChange" />
 -->
  <label>
    <input type="checkbox" />
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
// import type { ButtonSimpleProps, ButtonSimpleEmits } from './interface'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'Checkbox'
})

// const props = withDefaults(defineProps<ButtonSimpleProps>(), {
//   disabled: false,
//   size: 'medium',
//   shape: 'circle',
//   target: '',
//   variant: 'primary'
// })
// const emits = defineEmits<ButtonSimpleEmits>()

// const cls: ComputedRef<string[]> = computed(() => [
//   `${getClsPrefix()}btn-simple`,
//   `${getClsPrefix()}btn-simple-size-${props.size}`,
//   `${getClsPrefix()}btn-simple-shape-${props.shape}`,
//   `${getClsPrefix()}btn-simple-variant-${props.variant}`,
//   //通过布尔值参数值的类样式处理
//   `${props.disabled ? getClsPrefix() + 'btn-simple-disabled' : ''}`
// ])

// const isTagA: ComputedRef<boolean> = computed((): boolean => {
//   return props.target === '' ? false : true
// })

// const isTagADisabled: ComputedRef<number> = computed((): number => {
//   if (props.disabled) return -1
//   return 0
// })

// const handleClick: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
//   if (props.disabled) {
//     ev.preventDefault()
//     return
//   }
//   ;(ev.currentTarget as HTMLButtonElement).blur()
//   emits('click', ev)
// }
</script>

<style lang="less" src="./style/index.less"></style>
