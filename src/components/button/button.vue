<template>
  <template v-if="isTagA">
    <a :class="[cls]" :href="target" @click="handleClick" :tabindex="isTagADisabled">
      <slot name="icon" />
      <slot />
    </a>
  </template>
  <template v-else>
    <button :class="[cls]" :disabled="disabled" @click="handleClick">
      <slot name="icon" />
      <slot />
    </button>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { type ButtonProps, type ButtonEmits, DEFAULT_BUTTON_PROPS } from './interface'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'ButtonSimple',
})

const props = withDefaults(defineProps<ButtonProps>(), DEFAULT_BUTTON_PROPS)
const emits = defineEmits<ButtonEmits>()

const cls: string[] = [
  `${getClsPrefix()}btn-simple`,
  `${getClsPrefix()}btn-simple-size-${props.size}`,
  `${getClsPrefix()}btn-simple-shape-${props.shape}`,
  `${getClsPrefix()}btn-simple-variant-${props.variant}`,
  //通过布尔值参数值的类样式处理
  `${props.disabled ? getClsPrefix() + 'btn-simple-disabled' : ''}`,
]

const isTagA: ComputedRef<boolean> = computed((): boolean => {
  return props.target === '' ? false : true
})

const isTagADisabled: ComputedRef<number> = computed((): number => {
  if (props.disabled) return -1
  return 0
})

const handleClick: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  if (props.disabled) {
    ev.preventDefault()
    return
  }
  ;(ev.currentTarget as HTMLButtonElement).blur()
  emits('click', ev)
}
</script>

<style lang="less" src="./style/index.less"></style>
