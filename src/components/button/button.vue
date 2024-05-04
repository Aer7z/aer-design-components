<template>
  <template v-if="isTagA">
    <a :class="[cls]" :href="target" @click="handleClick" :tabindex="isTagADisabled">
      <slot />
      <!-- 图标在文字等内容的后头 -->
      <span v-if="loading"><slot name="icon" /> </span>
    </a>
  </template>
  <template v-else>
    <button :class="[cls]" :disabled="disabled" @click="handleClick">
      <slot />
      <!-- 图标在文字等内容的后头 -->
      <span v-if="loading"><slot name="icon" /> </span>
    </button>
  </template>
  <!-- <h3>{{ props }}</h3> -->
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { ButtonProps, ButtonEmits } from './interface'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'Button'
})

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  loading: false,
  size: 'medium',
  shape: 'square',
  status: 'normal',
  target: '',
  type: 'default'
})
const emits = defineEmits<ButtonEmits>()

const cls: ComputedRef<string[]> = computed(() => [
  `${getClsPrefix()}btn`,
  `${getClsPrefix()}btn-size-${props.size ?? 'medium'}`,
  `${getClsPrefix()}btn-shape-${props.shape ?? 'square'}`,
  `${getClsPrefix()}btn-status-${props.status ?? 'normal'}`,
  `${getClsPrefix()}btn-type-${props.type ?? 'default'}`,
  //通过布尔值参数值的类样式处理
  `${props.disabled ? getClsPrefix() + 'btn-disabled' : ''}`
])
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
  ;(ev.currentTarget as HTMLButtonElement).blur()
  emits('click', ev)
}
</script>

<style lang="less" src="./style/index.less"></style>
