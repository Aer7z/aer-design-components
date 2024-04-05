<template>
  <template v-if="target">
    <a :class="[styleClass]" :href="target" @click="handleClick">
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

const styleClass = computed(() => [
  'element',
  `${props.size ?? 'medium'}`,
  `${props.shape ?? 'square'}`,
  `${props.status ?? 'normal'}`,
  `${props.type ?? 'default'}`,
  {
    disabled: props.disabled
  }
])

// const cls = computed(() => [])

function handleClick(ev: MouseEvent): void {
  if (props.loading || props.disabled) {
    ev.preventDefault()
    return
  }
  ;(ev.currentTarget as HTMLButtonElement).blur()
  emits('click', ev)
}
</script>

<style lang="less" src="./style/button.less" scoped></style>
