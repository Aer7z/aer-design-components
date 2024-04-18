<template>
  <template v-if="target">
    <a :class="[styleClass]" :href="target" @click="handleClick" :tabindex="aIsDisabled">
      <slot />
      <!-- 图标在文字等内容的后头 -->
      <span v-if="loading"><slot name="icon" /> </span>
    </a>
  </template>
  <template v-else>
    <button :class="[styleClass]" :disabled="disabled" @click="handleClick">
      <slot />
      <!-- 图标在文字等内容的后头 -->
      <span v-if="loading"><slot name="icon" /> </span>
    </button>
  </template>
  <!-- <h3>{{ props }}</h3> -->
</template>

<script setup lang="ts">
// import type { PropType } from 'vue'
import { computed } from 'vue'
//console.log(getCurrentInstance())
import type { ButtonProps, ButtonEmits } from './interface'
import { getComponentsClassPrefix } from '../_utils/global-config'

defineOptions({
  name: 'Button'
})

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  loading: false,
  size: 'medium',
  shape: 'square',
  status: 'normal',
  type: 'default'
})
const emits = defineEmits<ButtonEmits>()

const styleClass: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}btn`,
  `${getComponentsClassPrefix()}btn-size-${props.size ?? 'medium'}`,
  `${getComponentsClassPrefix()}btn-shape-${props.shape ?? 'square'}`,
  `${getComponentsClassPrefix()}btn-status-${props.status ?? 'normal'}`,
  `${getComponentsClassPrefix()}btn-type-${props.type ?? 'default'}`,
  //通过布尔值参数值的类样式处理
  `${props.disabled ? getComponentsClassPrefix() + 'btn-disabled' : ''}`
  // {
  //   'aer-disabled': props.disabled
  // }
]).value

const aIsDisabled: number = computed(() => {
  if (props.disabled) return -1
  return 0
}).value

// const cls = computed(() => [])
const handleClick: Function = (ev: MouseEvent): void => {
  if (props.loading || props.disabled) {
    ev.preventDefault()
    return
  }
  ;(ev.currentTarget as HTMLButtonElement).blur()
  emits('click', ev)
}
</script>

<style lang="less" src="./style/index.less"></style>
