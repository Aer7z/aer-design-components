<template>
  <!-- <input type="checkbox" v-model="checked" @change="handleChange" />
 -->
  <label>
    <input :class="[cls]" type="checkbox" :value=" props.modelValue || props.value " />
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { CheckboxProps } from './interface'
import { getClsPrefix } from '@/components/_utils/global-config'

defineOptions({
  name: 'Checkbox',
})
const props = withDefaults(defineProps<CheckboxProps>(), {
  defaultChecked: false,
  disabled: false,
})

const cls: ComputedRef<string[]> = computed(() => [
  `${getClsPrefix()}checkbox`,
])
</script>

<style lang="less" src="./style/index.less"></style>
