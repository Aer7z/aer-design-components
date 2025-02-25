<template>
  <template v-if="isTagA">
    <a :class="[cls]" :href="target" @click="handleClick" :tabindex="isTagADisabled">
      <slot />
      <span v-if="loading"><slot name="icon" /> </span>
    </a>
  </template>
  <template v-else>
    <button :class="[cls]" :disabled="disabled" @click="handleClick">
      <slot />
      <template v-if="loading"><slot name="icon" /> </template>
    </button>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { type ButtonProps, type ButtonEmits } from './interface'
import { getClsPrefix } from '@/components/_utils/global-config'

defineOptions({
  name: 'Button',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  loading: false,
  size: 'medium',
  shape: 'square',
  status: 'normal',
  target: '',
  type: 'default',
})
const emits = defineEmits<ButtonEmits>()

const cls: string[] = [
  `${getClsPrefix()}btn-nonuse`,
  `${getClsPrefix()}btn-nonuse-size-${props.size}`,
  `${getClsPrefix()}btn-nonuse-shape-${props.shape}`,
  `${getClsPrefix()}btn-nonuse-status-${props.status}`,
  `${getClsPrefix()}btn-nonuse-type-${props.type}`,
  //通过布尔值参数值的类样式处理
  `${props.disabled ? getClsPrefix() + 'btn-nonuse-disabled' : ''}`,
]
const isTagA: ComputedRef<boolean> = computed((): boolean => {
  return props.target === '' ? false : true
})

const isTagADisabled: ComputedRef<number> = computed((): number => {
  if (props.disabled) return -1
  return 0
})

const handleClick: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  if (props.loading || props.disabled) {
    ev.preventDefault()
    return
  }
  // console.log('111')
  ;(ev.currentTarget as HTMLButtonElement).blur()
  emits('click', ev)
}
</script>

<style lang="less" src="./style/index.less"></style>
